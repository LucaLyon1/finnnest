import { useTestContext } from "@/lib/testContext";

interface SectionProps {
    sectionName: string
}

function Section({ sectionName }: SectionProps) {
    const { questions } = useTestContext();
    return (
        <>
            <div className="my-5">
                <p className="text-cyan-400">{questions.length} questions</p>
                <p className="font-medium">{sectionName}</p>
            </div>
        </>
    );
}

export default Section;