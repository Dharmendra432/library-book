import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import BookCard from "../components/BookCard";

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books);
  const [search, setSearch] = useState("");

  const filtered = books.filter(
    (b) =>
      b.category === category &&
      (b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    
    <div className="container">
      <h1>{category} Books</h1>

      <input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />


<div className="book-grid">
  {filtered.map((book) => (
    <BookCard key={book.id} book={book} />
  ))}
</div>
    </div>
  );
}

export default BrowseBooks;