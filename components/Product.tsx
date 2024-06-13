import Question from "./Question";

const mergerQ = ['How much debt will company B need to raise ?',
    'Is the following deal accretive or dillutive ?',
    'What is a SPV in M&A contexts ?'
]


function Product() {
    return (
        <div className="mt-20">
            <div className="text-center w-[60%] m-auto">
                <h1 className="text-4xl font-semibold">RESUME AND COVER LETTERS ARE OVER</h1>
                <h1 className="text-4xl font-semibold">SKILLS ARE FOREVER</h1>
                <p className="w-50% text-wrap text-xl mt-5">
                    In a time where jobs are getting more technicals & resume are identicals
                    save yourself some time by assessing your candidates' skills and make sure
                    you get the best & only the best
                </p>
            </div>
            <div className="w-[85%] m-auto  grid lg:grid-cols-2 mt-20 gap-20">
                <div>
                    <ul className="flex flex-col gap-10 font-semibold text-xl">
                        <li className="p-3 bg-slate-300 rounded-lg">Filter candidates with tests that fits your need</li>
                        <li className="p-3 bg-slate-300 rounded-lg">Handle high volume of applicants easily with a powerful dashboard</li>
                        <li className="p-3 bg-slate-300 rounded-lg">Provide a hiring process your candidates will love</li>
                    </ul>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                    <Question title="Merger & Acquisition" questions={mergerQ} />
                    <Question title="FP&A" questions={mergerQ} />
                    <Question title="Excel & VBA" questions={mergerQ} />
                    <Question title="Economics culture" questions={mergerQ} />
                </div>
            </div>
        </div>
    );
}

export default Product;