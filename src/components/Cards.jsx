import Card from "./Card";
import { useNotes } from "../graphql/hooks";
import { useGlobalContext } from "../Hooks/getStatesGlobally";
import { useState } from "react";

const Cards = () => {
  const [page, setPage] = useState(0);
  const { getSearchKey } = useGlobalContext();

  const { notes, loading, error } = useNotes(getSearchKey, 10, page);

  if (loading) {
    return <div style={{ textAlign: "center" }}>Loading...</div>;
  }
  if (error || notes.length === 0) {
    return (
      <div style={{ textAlign: "center", color: "red" }}>Data unavailable</div>
    );
  }

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && notes.length === 10) {
      setPage((selectedPage - 1) * 10);
    }
  };
  console.log(getSearchKey, "key");
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

          {[1, 2, 3].map((_, i) => {
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
            className={notes.length < 10 ? "" : "pagination__disable"}
          >
            ▶
          </span>
        </div>
      )}
    </div>
  );
};

export default Cards;
