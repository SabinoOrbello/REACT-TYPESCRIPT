import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  published_at: string;
  image_url: string;
}

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data.results));
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <Link to={`/articles/${article.id}`}>
            <img src={article.image_url} alt={article.title} style={{ width: "200px" }} />
          </Link>
          <h3>{article.title}</h3>
          <p>{article.published_at}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
