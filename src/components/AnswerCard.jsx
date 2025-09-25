
const AnswerCard = ({ answer, citation, onCitationClick }) => {
  return (
    <div className="border-t pt-4">
      <div className="bg-gray-50 p-4 rounded shadow">
        <p className="text-gray-800 whitespace-pre-line">{answer}</p>

        <div className="mt-4 space-y-2 text-sm">
          <p className="text-gray-700">{citation.text}</p>

          {/* Link shown as 'Download Judgment PDF' */}
          <button
            onClick={() => onCitationClick(citation.link)}
            className="text-blue-600 underline hover:text-blue-800 cursor-pointer bg-none border-none p-0"
          >
            Download Judgment PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnswerCard;
