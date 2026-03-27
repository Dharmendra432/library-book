import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/books/Fiction">Browse Books</Link>
      <Link to="/add-book">Add Book</Link>
    </nav>
  );
}

export default Navbar;