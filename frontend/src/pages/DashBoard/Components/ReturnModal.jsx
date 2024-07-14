import React from 'react';
import Modal from 'react-modal';

// Set the app element for accessibility
Modal.setAppElement('#root');

const ReturnModal = ({ isOpen, onClose, book, lateFees }) => {
  const handleReturn = () => {
    console.log('Returning book:', book.title);
    onClose();
  };

  const handlePayFees = () => {
    console.log('Paying late fees for book:', book.title);
    console.log('Amount:', lateFees);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="w-11/12 max-w-2xl mx-auto mt-20 bg-white rounded-lg shadow-lg outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start"
    >
      <div className="p-6">
        <div className="flex mb-6">
          <img src={book.coverUrl} alt={book.title} className="w-1/3 object-cover mr-6" />
          <div className="w-2/3">
            <h2 className="text-2xl font-bold mb-4">{book.title}</h2>
            {lateFees > 0 ? (
              <>
                <p className="text-lg mb-4">Late Fees: ${lateFees.toFixed(2)}</p>
                <button
                  onClick={handlePayFees}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Pay Now
                </button>
              </>
            ) : (
              <button
                onClick={handleReturn}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Return Book
              </button>
            )}
          </div>
        </div>
        <button
          onClick={onClose}
          className="mt-4 text-gray-500 hover:text-gray-700"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ReturnModal;