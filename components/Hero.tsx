function Hero() {
    return (
        <div className="w-[80%] m-auto grid lg:grid-cols-3 mt-20 gap-5">
            <div className="lg:col-span-2 flex flex-col gap-4">
                <h1 className="text-6xl">Test your candidates</h1>
                <h1 className="text-6xl">Pick the best</h1>
                <p className="text-xl">
                    Our libraries of quizz specifically tailored for finance interviews
                    will enable you to quickly and easily chose the best fit for your
                    company !
                </p>
                <p className="text-xl">
                    finnnest. lets you create some custom quizz easily to
                    emphasize on the quality you are looking for in your candidates.
                </p>
                <div className="flex gap-3">
                    <button className="w-36 py-3 border-2 rounded-full border-cyan-400">Book a demo</button>
                    <button className="w-36 py-3 border-2 rounded-full border-cyan-400 bg-cyan-400 text-white">Try for free</button>
                </div>
            </div>
            <div className="m-auto w-full col-span-1">IMAGE</div>
        </div>
    );
}

export default Hero;