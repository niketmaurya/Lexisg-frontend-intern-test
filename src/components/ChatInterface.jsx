import  { useState } from 'react';
import AnswerCard from './AnswerCard';
import PdfModal from './PdfModal';

const ChatInterface = () => {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [pdfLink, setPdfLink] = useState('');

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      const simulatedResponse = {
        answer: "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        citations: [
          {
            text: "\u201cas the age of the deceased at the time of accident was held to be about 54-55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.\u201d (Para 7 of the document)",
            source: "Dani_Devi_v_Pritam_Singh.pdf",
            link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz"
          }
        ]
      };
      setResponse(simulatedResponse);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-6 space-y-4">
      <h1 className="text-xl font-semibold">Lexi Legal Assistant</h1>
      <textarea
        className="w-full border rounded p-3 focus:outline-none focus:ring"
        rows="4"
        placeholder="Ask a legal question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      ></textarea>
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading || !question.trim()}
      >
        {loading ? 'Thinking...' : 'Submit'}
      </button>

      {response && (
        <AnswerCard
          answer={response.answer}
          citation={response.citations[0]}
          onCitationClick={(link) => {
            setPdfLink(link);
            setModalOpen(true);
          }}
        />
      )}

      {modalOpen && <PdfModal pdfLink={pdfLink} onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default ChatInterface;