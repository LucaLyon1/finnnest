function OpenQuestion() {
    return (
        <>
            <textarea className="p-4 border border-[#D8D8D8] rounded-lg w-full h-[200px]" placeholder="Write the question here..."></textarea>
            <textarea className="p-4 border border-[#D8D8D8] rounded-lg w-full h-[200px]" placeholder="Your candidates will answer here..." disabled></textarea>
        </>
    );
}

export default OpenQuestion;