import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import BlogPost from "./pages/BlogPost";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  return (
    // <Router>
    //   <nav style={{ padding: "1rem" }}>
    //     <Link to="/">Home</Link> | <Link to="/react-fiber">React Fiber</Link>
    //   </nav>

    //   <Routes>
    //     <Route path="/" element={<h2>Welcome to Blog</h2>} />
    //     <Route path="/:slug" element={<BlogPost />} />
    //   </Routes>
    // </Router>
    <div>
      <div className="wave"></div>
<div className="wave"></div>
<div className="wave"></div>
<UnderConstruction/>
    </div>
  );
}

export default App;
