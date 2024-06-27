import { useRouter } from "next/navigation";
import { RxArrowLeft } from "react-icons/rx";

function SubheaderOffer() {
    const router = useRouter();
    return (
        <div>
            <div className="w-full 
        h-[200px] 
        border-b 
        border-[#D8D8D8]
        ">
                <div className="w-[80%] m-auto pt-5 h-full items-baseline flex gap-5">
                    <RxArrowLeft onClick={() => router.back()} className="text-3xl hover:bg-gray-200 cursor-pointer rounded-sm" />
                    <div>
                        <h2 className="text-4xl">Create job offer</h2>
                        <p className="pl-1">Dashboard / Create Job Offer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubheaderOffer;