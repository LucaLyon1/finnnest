'use client';

import { createClient } from "@/lib/supabase/client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
function Page() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const supabase = createClient();
        const fetchData = async () => {
            const { data, error } = await supabase.from('offers').select('*').eq('id', id).single();
            const offer = JSON.parse(data.datas);
            setData(() => offer);
            console.log(offer);
        }
        fetchData();
    }, [])

    return (
        <div className="w-1/2 border-2 b-[#D8D8D8] m-auto p-2">
            <h2 className="text-2xl">Offer :</h2>
            <p>{data && data.title}</p>
            <h2 className="text-2xl">Description :</h2>
            <p>{data && data.description}</p>
            <h2 className="text-2xl">City :</h2>
            <p>{data && data.city}</p>
            <h2 className="text-2xl">Type :</h2>
            <p>{data && data.type}</p>

        </div>
    );
}

export default Page;