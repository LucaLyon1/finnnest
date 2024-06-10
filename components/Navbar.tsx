function Navbar() {
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
        ">
            <h2 className="text-4xl flex-1">finnnest</h2>
            <div className="flex-1">Pricing</div>
            <div className="flex-1">Blog</div>
            <div className="flex-1">Job board</div>
            <div className="flex-1 flex gap-3 items-center m-auto">
                <button className="w-36 py-3 border-2 rounded-full border-cyan-400">Book a demo</button>
                <button className="w-36 py-3 border-2 rounded-full border-cyan-400 bg-cyan-400 text-white">Try for free</button>
            </div>
        </nav>
    );
}

export default Navbar;