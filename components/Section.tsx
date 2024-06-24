import { useTestContext } from "@/lib/testContext";

interface SectionProps {
    id: number
}

function Section({ id }: SectionProps) {
    const { questions, section, updateCurrentSection, getSection, newSection, getSections } = useTestContext();

    //newSection is kind of like navigate
    const setSection = () => {
        updateCurrentSection(id);
    }

    return (
        <>
            <button onClick={setSection} className=" hover:bg-slate-100 text-start">
                <p className="text-cyan-400">{questions.filter((q) => q.section.id === id).length} questions</p>
                <p className="font-medium">{getSection(id)?.title}</p>
            </button>
        </>
    );
}

export default Section;