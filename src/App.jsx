import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem" }}>
        <Link to="/">Home</Link> | <Link to="/react-fiber">React Fiber</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Welcome to Blog</h2>} />
        <Route path="/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
