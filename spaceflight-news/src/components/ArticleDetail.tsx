import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  published_at: string;
  image_url: string;
  url: string;
  summary: string;
}

type Params = {
  id: string;
  [key: string]: string | undefined;
};

const ArticleDetail: React.FC = () => {
  const { id } = useParams<Params>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={article.image_url} alt={article.title} />
      <h1>{article.title}</h1>
      <p>{article.published_at}</p>
      <p>{article.summary}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default ArticleDetail;
