import Subheader from "@/components/Subheader";

function createTest() {
    return (
        <div>
            <Subheader />
            <div className="grid grid-cols-4 mt-20">
                <div className="col-span-1 w-[80%] ml-auto">
                    <h2 className="text-xl font-semibold">Test Content</h2>
                    {/* TODO: this comes from state & DB + own component */}
                    <div className="my-5">
                        <p className="text-cyan-400">10 questions</p>
                        <p className="font-medium">Merger & Acquisition</p>
                    </div>
                    <div className="my-5">
                        <p className="text-cyan-400">10 questions</p>
                        <p className="font-medium">Excel & VBA</p>
                    </div>
                    <button className="w-[60%] py-2 text-cyan-400 border border-[#D8D8D8] rounded-md hover:bg-[#FAFAFA]">Add Section</button>
                </div>
                {/* TODO:  own component, type as prop*/}
                <div className="col-span-3 border border-[#D8D8D8] w-[90%] m-auto rounded-lg shadow-sm p-10 flex flex-col gap-10">
                    <div className="flex gap-5">
                        <h2 className="text-2xl">Merger & Acquisition</h2>
                        <select name="question" id="cars" className="bg-[#F0F0F0] rounded-lg w-[200px]">
                            <option value="yesno">Yes/No</option>
                            <option value="mcq">Multiple Choice</option>
                            <option value="text">Open question</option>
                            <option value="file">File input</option>
                        </select>
                    </div>
                    <p>The future junior should be able to work in complex context such as multi-layered LBO,
                        and quickly and accurately report a high volume of information</p>
                    <hr />
                    <div className="flex gap-5 flex-col p-4 border border-[#D8D8D8] rounded-lg">
                        <label htmlFor="title" className="text-xl">Question 1</label>
                        <textarea className="p-4 border border-[#D8D8D8] rounded-lg w-full h-[200px]" placeholder="Write the question here..."></textarea>
                        <div className="flex w-full justify-between gap-5">
                            <button className="w-full bg-[#F0F0F0] h-14 font-medium text-xl rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">Yes</button>
                            <button className="w-full bg-[#F0F0F0] h-14 font-medium text-xl rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300">No</button>
                        </div>
                    </div>
                    <button className="m-auto w-[300px] py-2 text-cyan-400 border border-[#D8D8D8] rounded-md hover:bg-[#FAFAFA]">Add question</button>
                </div>
            </div>
        </div>
    );
}

export default createTest;