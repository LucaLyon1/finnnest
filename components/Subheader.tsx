import { createClient } from "@/lib/supabase/client";
import { useTestContext } from "@/lib/testContext";
import { useRouter, useSearchParams } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

function Subheader() {
    const { questions } = useTestContext();
    const router = useRouter();
    const searchParams = useSearchParams();
    const offerId = searchParams.get('offerId');
    const handlePublish = async () => {
        const supabase = createClient();
        const id = uuidv4();
        const { data, error } = await supabase.from('tests').insert({
            id: id,
            questions: JSON.stringify(questions),
            public: true,
        });
        if (!error) {
            const { data, error } = await supabase.from('offers').update({ test_id: id }).eq('id', offerId);
            if (!error) {
                router.push('/offer-recap?id=' + offerId);
            }
        }
    }
    const saveTest = async () => {
        const supabase = createClient();
        const { data, error } = await supabase.from('tests').insert({
            questions: JSON.stringify(questions),
            public: false,
        })
    }
    return (
        <div className="w-full 
        h-[200px] 
        bg-gradient-to-b 
        from-cyan-200 
        border-b 
        border-[#D8D8D8]
        ">
            <div className="w-[80%] m-auto pt-5 flex justify-between h-full">
                <div>
                    <h2 className="text-3xl">Create test</h2>
                    <p>Dashboard / Create Test</p>
                </div>
                <div className="flex gap-5 h-full items-center">
                    <button onClick={saveTest} className="w-28 h-10 bg-white border border-[#D8D8D8] rounded-full hover:scale-105 transition-all hover:bg-cyan-400">Save</button>
                    <button onClick={handlePublish} className="w-28 h-10 bg-cyan-400 border border-cyan-400 rounded-full hover:bg-cyan-500 hover:scale-105 text-white transition-all">Publish</button>
                </div>
            </div>
        </div>
    );
}

export default Subheader;