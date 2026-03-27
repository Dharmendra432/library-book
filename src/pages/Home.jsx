import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

function Home() {
  const books = useSelector((state) => state.books);
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi"];

  return (
    <div className="container">
      <h1>Welcome to Library</h1>

      <h2>Categories</h2>
      {categories.map((cat) => (
        <Link key={cat} className="category-link" to={`/books/${cat}`}>
          {cat}
        </Link>
      ))}

      <h2>Popular Books</h2>
      {books.slice(0, 3).map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default Home;