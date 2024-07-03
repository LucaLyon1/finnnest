'use client'

import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
    const router = useRouter();
    const signOut = async () => {
        const supabase = createClient();

        await supabase.auth.signOut();
        router.refresh();
    }
    return (
        <nav className="h-[100px] 
        w-[100%] 
        m-auto 
        flex 
        items-center 
        justify-between 
        shadow-md
        px-[16%]
        text-center
        mb-24
        ">
            <Link href="/"><h2 className="text-4xl flex-1">finnnest</h2></Link>
            <Link href='/pricing' className="flex-1"><div>Pricing</div></Link>
            <Link href='/blog' className="flex-1"><div>Blog</div></Link>
            <Link href='/job-board' className="flex-1"><div>Job board</div></Link>
            <div className="flex-1 flex gap-3 items-center m-auto">
                <button className="w-36 py-3 border-2 rounded-full border-cyan-400">Book a demo</button>
                <Link href='/create-offer'><button className="w-36 py-3 border-2 rounded-full border-cyan-400 bg-cyan-400 text-white hover:scale-105 hover:bg-cyan-500 transition-all">Try for free</button></Link>
            </div>
            <button onClick={signOut}>sign out</button>
        </nav>
    );
}

export default Navbar;