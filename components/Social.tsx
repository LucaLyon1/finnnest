import Image from "next/image";
import Card from "@/public/card.png"

function Social() {
    return (
        <div className="w-full bg-[#1C1C1C] pt-20 mt-20">
            <div className="w-[80%] m-auto text-center">
                <div>
                    <h1 className="text-4xl text-white">Join 10.000 companies using skill-based hiring</h1>
                    <h1 className="text-4xl text-white">hire with finnnest.</h1>
                </div>
                <div className="w-full 
                flex 
                justify-center 
                gap-24 
                mt-24 
                items-center 
                pb-20
                flex-wrap
                ">
                    <div className="flex-1 flex 
                    lg:justify-end 
                    lg:min-w-[400px]
                    min-w-full
                    justify-center">
                        <Image
                            src={Card}
                            width={400}
                            height={400}
                            alt="Example of scores"
                        />
                    </div>
                    <ul className="text-white 
                    text-left 
                    text-2xl 
                    flex 
                    flex-col
                    items-center
                    lg:items-start 
                    gap-10
                    flex-1
                    list-disc
                    ">
                        <li>Get a quick & precise overview of the top candidates</li>
                        <li>Go more in-depth with a profile analysis</li>
                        <li>Add candidates to an interview waitlist</li>
                        <li>Hire the best person for the job</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Social;