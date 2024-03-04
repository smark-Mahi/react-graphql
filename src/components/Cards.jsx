import Card from "./Card";
import { useNotes } from "../graphql/hooks";
import { useGlobalContext } from "../Hooks/getStatesGlobally";
import { useState } from "react";

const Cards = () => {
  const [page, setPage] = useState(1);
  const { getSearchKey } = useGlobalContext();

  const { notes, loading, error, totalPages } = useNotes(getSearchKey, page);

  if (loading) {
    return (
      <div className="loader">
        <div className="pencil-loader">
          <div className="note-book">
            <p className="first-line"></p>
            <p></p>
            <p></p>
          </div>
          <div className="pencil">
            <div className="eraser-part"></div>
            <div className="middle-part"></div>
            <div className="bottom-part"></div>
          </div>
          <div className="ground"></div>
        </div>
      </div>
    );
  }
  if (error || notes.length === 0) {
    return (
      <div style={{ textAlign: "center", color: "red", height: "400px" }}>
        Data unavailable
      </div>
    );
  }

  const selectPageHandler = (selectedPage) => {
    console.log(selectedPage, totalPages, "pageno");
    if (selectedPage >= 1 && selectedPage <= totalPages) {
      setPage(selectedPage);
    }
  };
  console.log(notes, "key");
  return (
    <div>
      <div className="cards">
        {notes.map((note) => (
          <Card note={note} />
        ))}
      </div>
      {notes.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={page > 1 ? "" : "pagination__disable"}
          >
            ◀
          </span>

          {[...new Array(totalPages)].map((_, i) => {
            return (
              <span
                key={i}
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}

          <span
            onClick={() => selectPageHandler(page + 1)}
            className={page < totalPages ? "" : "pagination__disable"}
          >
            ▶
          </span>
        </div>
      )}
    </div>
  );
};

export default Cards;
