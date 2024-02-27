import ReactDOM from "react-dom";
const UpdateNoteModal = ({ closeModal }) => {
  return ReactDOM.createPortal(
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <p>open</p>
        <button onClick={closeModal}>close</button>
      </div>
    </>,
    document.getElementById("my-modal-with-portal")
  );
};

export default UpdateNoteModal;
