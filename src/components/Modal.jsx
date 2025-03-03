const Modal = ({ isOpen, onClose, onConfirm, message }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg">
          <p className="text-gray-700">{message}</p>
          <div className="mt-4 flex justify-end space-x-4">
            <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
            <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded">Confirm</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;
  