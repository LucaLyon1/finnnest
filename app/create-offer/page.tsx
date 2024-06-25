'use client';

import SubheaderOffer from "@/components/SubhearOffer";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

interface JobOffer {
    title: string,
    city: string,
    description: string,
    type: string,
    salary: { frequence: string, amount: number[] },
    company: string
}

function CreateOffer() {
    const [formData, setFormData] = useState<JobOffer>({
        title: '',
        city: '',
        description: '',
        type: '',
        salary: { frequence: 'monthly', amount: [30000, 40000] },
        company: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        console.log(formData);
    }
    return (
        <div>
            <SubheaderOffer />
            <div className="w-3/4 border-2 border-cyan-300 mt-10 mx-auto rounded-md p-5 flex flex-wrap">
                <div className="flex items-center w-full my-5">
                    <label htmlFor="title" className="text-lg font-medium w-full">Job title</label>
                    <input onChange={handleChange} value={formData.title} name="title" type="text" placeholder="e.g Junior M&A analyst" className="border-2 border-[#D8D8D8] py-2 px-4 rounded-md w-full" />
                </div>
                <hr className="w-full" />
                <div className="flex items-center w-full my-5">
                    <label htmlFor="city" className="text-lg font-medium w-full">Job city</label>
                    <input onChange={handleChange} value={formData.city} type="text" placeholder="e.g Paris, France" className="border-2 border-[#D8D8D8] py-2 px-4 rounded-md w-full" name="city" />
                </div>
                <hr className="w-full" />
                <div className="flex items-center w-full my-5">
                    <label htmlFor="description" className="text-lg font-medium w-full">Job Description</label>
                    <textarea onChange={handleChange} value={formData.description} name="description" className="w-full border-2 border-[#D8D8D8] rounded-md p-2 min-h-40" placeholder="Description"></textarea>
                </div>
                <hr className="w-full" />
                <div className="flex items-start w-full my-5">
                    <div className="w-full">
                        <label htmlFor="jobtype" className="text-lg font-medium w-full">Job type</label>
                        <p className="text-gray-500">What type of position are you recruiting in</p>
                    </div>
                    <div className="w-full flex flex-col gap-5">
                        <div className="flex items-center gap-5 text-lg border-2 border-[#D8D8D8] w-full p-2 rounded-md">
                            <input onChange={handleChange} type="radio" name="type" id="fulltime" value="fulltime" />
                            <label htmlFor="fulltime">Full-Time</label>
                        </div>
                        <div className="flex items-center gap-5 text-lg border-2 border-[#D8D8D8] w-full p-2 rounded-md">
                            <input onChange={handleChange} type="radio" name="type" id="parttime" value="parttime" />
                            <label htmlFor="parttime">Part-Time</label>
                        </div>
                        <div className="flex items-center gap-5 text-lg border-2 border-[#D8D8D8] w-full p-2 rounded-md">
                            <input onChange={handleChange} type="radio" name="type" id="internship" value="internship" />
                            <label htmlFor="internship">Internship</label>
                        </div>
                        <div className="flex items-center gap-5 text-lg border-2 border-[#D8D8D8] w-full p-2 rounded-md">
                            <input onChange={handleChange} type="radio" name="type" id="apprenticeship" value="apprenticeship" />
                            <label htmlFor="apprenticeship">Apprenticeship</label>
                        </div>
                    </div>
                </div>
                <hr className="w-full" />
                <div className="flex items-center w-full my-5">
                    <label htmlFor="jobdesc" className="text-lg font-medium w-full">Salary</label>
                    <div className="flex w-full gap-5">
                        <div className="border-2 border-[#D8D8D8] w-1/3 h-32 rounded-md text-center flex flex-col justify-center gap-3">
                            <input onChange={handleChange} type="radio" name="salary" id="hourly" value="hourly" />
                            <label htmlFor="hourly">Hourly</label>
                        </div>
                        <div className="border-2 border-[#D8D8D8] w-1/3 h-32 rounded-md text-center flex flex-col justify-center gap-3">
                            <input onChange={handleChange} type="radio" name="salary" id="monthly" value="monthly" />
                            <label htmlFor="monthly">Monthly</label>
                        </div>
                        <div className="border-2 border-[#D8D8D8] w-1/3 h-32 rounded-md text-center flex flex-col justify-center gap-3">
                            <input onChange={handleChange} type="radio" name="salary" id="annually" value="annually" />
                            <label htmlFor="annually">Annually</label>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex justify-end gap-5 ml-auto">
                    <input value={formData.salary.amount[0]} placeholder="30 000$" className="w-1/2 p-2 rounded-md border-2 border-[#D8D8D8] mb-5" type="number" name="salary" id="salary1" />
                    <input value={formData.salary.amount[1]} placeholder="40 000$" className="w-1/2 p-2 rounded-md border-2 border-[#D8D8D8] mb-5" type="number" name="salary" id="salary2" />
                </div>
                <hr className="w-full" />
                <div className="flex items-center w-full my-5">
                    <label htmlFor="company" className="text-lg font-medium w-full">Company</label>
                    <input onChange={handleChange} type="text" placeholder="e.g BNP Paribas" className="border-2 border-[#D8D8D8] py-2 px-4 rounded-md w-full" name="company" />
                </div>
                <hr className="w-full" />
                <div className="m-auto mt-5">
                    <Link href="/create-test" >
                        <button className="py-3 w-[100px] text-white text-md bg-cyan-300 rounded-full transition-all hover:scale-105 hover:bg-cyan-400">
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CreateOffer;