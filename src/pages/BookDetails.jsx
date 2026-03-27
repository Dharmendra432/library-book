import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books);

  const book = books.find((b) => b.id == id);

  if (!book) return <h1>Book Not Found</h1>;

  return (
    <div className="details">
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <p>⭐ {book.rating}</p>

      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default BookDetails;