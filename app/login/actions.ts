'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error } = await supabase.auth.signInWithPassword(data)
    if (error) {
        console.log(error);
        redirect('/error')
    }

    revalidatePath('/', 'layout')
    redirect('/')
}

export async function signup(formData: FormData) {
    const supabase = createClient();
    const userData: any = {};
    for (let [key, value] of formData.entries()) {
        userData[key] = value;
    }

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const formdata = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { data, error } = await supabase.auth.signUp(formdata)
    if (error) {
        redirect('/error')
    }
    await supabase.from('users').insert({
        id: data.user?.id,
        first_name: userData.firstname,
        last_name: userData.lastname,
        role: userData.role,
    })

    revalidatePath('/', 'layout')
    redirect('/')
}

export async function handleSignIn() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'http://localhost:3000/auth/callback',
        },
    })
    if (data.url) {
        redirect(data.url) // use the redirect API for your server framework
    } else if (error) {
        redirect('/error&' + error)
    }
}