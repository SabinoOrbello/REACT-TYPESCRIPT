import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import ArticleDetail from "./components/ArticleDetail";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <div>
          <Routes>
            <Route path="/" Component={ArticleList} />
            <Route path="/articles/:id" Component={ArticleDetail} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
