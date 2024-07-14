import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

// Set the app element for accessibility
Modal.setAppElement('#root');

const BorrowModal = ({ isOpen, onClose, book }) => {
  const [checkoutDate, setCheckoutDate] = useState('');
  const [checkinDate, setCheckinDate] = useState('');

  useEffect(() => {
    if (checkoutDate) {
      const checkoutDateObj = new Date(checkoutDate);
      const checkinDateObj = new Date(checkoutDateObj);
      checkinDateObj.setMonth(checkinDateObj.getMonth() + 1);
      
      // Ensure the check-in date is not on a weekend
      while (checkinDateObj.getDay() === 0 || checkinDateObj.getDay() === 6) {
        checkinDateObj.setDate(checkinDateObj.getDate() + 1);
      }

      setCheckinDate(checkinDateObj.toISOString().split('T')[0]);
    } else {
      setCheckinDate('');
    }
  }, [checkoutDate]);

  const handleCheckoutDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate >= today) {
      setCheckoutDate(e.target.value);
    } else {
      alert("Please select a date from today onwards.");
    }
  };

  const handleBorrow = () => {
    if (!checkoutDate) {
      alert("Please select a checkout date.");
      return;
    }
    // Implement borrow functionality here
    console.log('Borrowing book:', book.title);
    console.log('Checkout date:', checkoutDate);
    console.log('Check-in date:', checkinDate);
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
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="checkoutDate">
                Check-out Date
              </label>
              <input
                type="date"
                id="checkoutDate"
                value={checkoutDate}
                onChange={handleCheckoutDateChange}
                min={new Date().toISOString().split('T')[0]}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="checkinDate">
                Check-in Date (1 month from checkout)
              </label>
              <input
                type="date"
                id="checkinDate"
                value={checkinDate}
                disabled
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight bg-gray-100"
              />
            </div>
            <button
              onClick={handleBorrow}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Borrow
            </button>
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

export default BorrowModal;