import Subheader from "@/components/Subheader";

function createTest() {
    return (
        <div>
            <Subheader />
            <div className="grid grid-cols-4 mt-20">
                <div className="col-span-1 w-[80%] ml-auto">
                    <h2 className="text-xl font-semibold">Test Content</h2>
                    {/* TODO: this comes from state & DB */}
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
                <div className="col-span-3 border border-[#D8D8D8] w-[90%] m-auto rounded-lg shadow-sm p-10">
                    <h2 className="text-2xl">Merger & Acquisition</h2>
                    <p>The future junior should be able to work in complex context such as multi-layered LBO,
                        and quickly and accurately report a high volume of information</p>
                </div>
            </div>
        </div>
    );
}

export default createTest;