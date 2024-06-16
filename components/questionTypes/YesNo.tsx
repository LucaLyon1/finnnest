'use client';

function YesNo() {
    return (
        <>
            <textarea className="p-4 border border-[#D8D8D8] rounded-lg w-full h-[200px]" placeholder="Write the question here..."></textarea>
            <div className="flex w-full justify-between gap-5">
                {/* Maybe misleading ? This is the create test page */}
                <button className="w-full bg-[#F0F0F0] h-14 font-medium text-xl rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">Yes</button>
                <button className="w-full bg-[#F0F0F0] h-14 font-medium text-xl rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">No</button>
            </div>
        </>
    );
}

export default YesNo;