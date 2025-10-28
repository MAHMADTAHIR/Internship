import React, { useEffect, useState } from "react";
import NewsList from "./components/NewsList";

function App() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchNews = async (pageNum) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=3&page=${pageNum}&apiKey=6df3e1fc0fc24d0cb560232b07385e70`
      );
      const data = await res.json();
      setNews((prev) => [...prev, ...data.articles]);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews(page);
  }, [page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 3);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Taza Khabar</h2>

      {loading && news.length === 0 ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      ) : (
        <>
          <NewsList news={news} />

          <div className="text-center mt-3">
            <button
              className="btn btn-primary"
              onClick={handleLoadMore}
              disabled={loading}
            >
              {loading ? "Loading..." : "Load More"}

            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default App;