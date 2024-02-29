import { useMutation } from "@apollo/client";
import ReactDOM from "react-dom";
import { UPDATE_NOTE } from "../graphql/queries";
const UpdateNoteModal = ({ closeModal, currentData, setGetCurrentNote }) => {
  const { id, title, detail } = currentData;
  console.log(currentData, "updateddddddddd");
  const [updateNote] = useMutation(UPDATE_NOTE, {
    variables: { id, title, detail },
  });

  function updateNoteHandler(e) {
    e.preventDefault();
    updateNote(currentData.id, currentData.title, currentData.detail);
    closeModal();
  }
  return ReactDOM.createPortal(
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <div className="title-bar">
          <p>Update Note</p>
          <p onClick={closeModal} className="close-modal">
            x
          </p>
        </div>
        <div className="modal-body">
          <form onSubmit={updateNoteHandler}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Enter title"
                id="title"
                value={currentData.title}
                onChange={(e) =>
                  setGetCurrentNote({
                    title: e.target.value,
                    detail: currentData.detail,
                    id: currentData.id,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="detail">Detail</label>
              <input
                type="text"
                placeholder="Enter details"
                id="detail"
                value={currentData.detail}
                onChange={(e) =>
                  setGetCurrentNote({
                    title: currentData.title,
                    detail: e.target.value,
                    id: currentData.id,
                  })
                }
              />
            </div>
            <button className="update">Update</button>
          </form>
        </div>
      </div>
    </>,
    document.getElementById("my-modal-with-portal")
  );
};

export default UpdateNoteModal;
