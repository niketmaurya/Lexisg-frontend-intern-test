
const PdfModal = ({ pdfLink, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-11/12 h-5/6 p-4 rounded relative">
        <button
          className="absolute top-2 right-2 text-red-600 font-bold text-lg"
          onClick={onClose}
        >
          &times;
        </button>
        <iframe src={pdfLink} title="PDF Viewer" className="w-full h-full border-none" />
      </div>
    </div>
  );
};

export default PdfModal;