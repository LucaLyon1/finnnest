'use client';

import SubheaderOffer from "@/components/SubhearOffer";
import { createClient } from "@/lib/supabase/client";
import { useTestContext } from "@/lib/testContext";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid'

interface JobOffer {
    title: string,
    city: string,
    description: string,
    type: string,
    salary: { frequence: string, low: number, high: number },
    company: string
}

let disabledStyle = "bg-cyan-200 cursor-not-allowed"
let btnStyle = "bg-cyan-300 hover:scale-105 hover:bg-cyan-400"

function CreateOffer() {
    const [formData, setFormData] = useState<JobOffer>({
        title: '',
        city: '',
        description: '',
        type: '',
        salary: { frequence: 'monthly', low: 0, high: 0 },
        company: ''
    });
    const [errorMsg, setErrorMsg] = useState('');
    const router = useRouter();

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    const handleSalary = (e: ChangeEvent<HTMLInputElement>) => {
        let { name, value } = e.target;
        setFormData((prev) => ({ ...prev, salary: { ...prev.salary, [name]: value } }));
    }
    const navigateTest = async () => {
        const supabase = createClient();
        const id = uuidv4();
        const { error } = await supabase.from('offers').insert({
            id: id,
            title: formData.title,
            city: formData.city,
            description: formData.description,
            type: formData.type,
            company: formData.company,
            salary_frequency: formData.salary.frequence,
            salary_low: formData.salary.low,
            salary_high: formData.salary.high,
        });
        if (!error) {
            router.push('/create-test?offerId=' + id);
        } else {
            setErrorMsg(() => error.message);
        }
    };
    const validateData = () => {
        const { title, city, description, type, salary, company } = formData;
        if (title == '') return false;
        if (city == '') return false;
        if (description == '') return false;
        if (type == '') return false;
        if (salary.low == 0) return false;
        if (salary.high == 0) return false;
        if (company == '') return false;
        return true;
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
                            <input onChange={handleSalary} type="radio" name="frequence" id="hourly" value="hourly" />
                            <label htmlFor="hourly">Hourly</label>
                        </div>
                        <div className="border-2 border-[#D8D8D8] w-1/3 h-32 rounded-md text-center flex flex-col justify-center gap-3">
                            <input onChange={handleSalary} type="radio" name="frequence" id="monthly" value="monthly" />
                            <label htmlFor="monthly">Monthly</label>
                        </div>
                        <div className="border-2 border-[#D8D8D8] w-1/3 h-32 rounded-md text-center flex flex-col justify-center gap-3">
                            <input onChange={handleSalary} type="radio" name="frequence" id="annually" value="annually" />
                            <label htmlFor="annually">Annually</label>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex justify-end gap-5 ml-auto items-baseline">
                    <span>between</span>
                    <input onChange={handleSalary} value={formData.salary.low} placeholder="30 000$" className="w-1/2 p-2 rounded-md border-2 border-[#D8D8D8] mb-5" type="number" name="low" id="salary1" />
                    <span>and</span>
                    <input onChange={handleSalary} value={formData.salary.high} placeholder="40 000$" className="w-1/2 p-2 rounded-md border-2 border-[#D8D8D8] mb-5" type="number" name="high" id="salary2" />
                </div>
                <hr className="w-full" />
                <div className="flex items-center w-full my-5">
                    <label htmlFor="company" className="text-lg font-medium w-full">Company</label>
                    <input onChange={handleChange} type="text" placeholder="e.g BNP Paribas" className="border-2 border-[#D8D8D8] py-2 px-4 rounded-md w-full" name="company" />
                </div>
                <hr className="w-full" />
                <div className="m-auto mt-5">
                    {errorMsg && <span>{errorMsg}</span>}
                    <button disabled={!validateData()} onClick={navigateTest} className={'py-2 px-3 text-white text-lg rounded-full transition-all ' + (validateData() ? btnStyle : disabledStyle)}>
                        Create associated test
                    </button>
                </div>
            </div>
        </div >
    );
}

export default CreateOffer;