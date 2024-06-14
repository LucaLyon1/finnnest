function Subheader() {
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
                    <button className="w-28 h-10 bg-white border border-[#D8D8D8] rounded-full">Save</button>
                    <button className="w-28 h-10 bg-cyan-400 border border-cyan-400 rounded-full">Publish</button>
                </div>
            </div>
        </div>
    );
}

export default Subheader;