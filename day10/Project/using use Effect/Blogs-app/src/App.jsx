import Loader from "./components/Loader";
import List from "./components/List";
import { useEffect, useState } from "react";

function App() {
  const apiKey = "6df3e1fc0fc24d0cb560232b07385e70";
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const pageSize = 5;

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        );
        const data = await res.json();
        setBlogs(data.articles || []);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const loadMore = () => setPage(page + 1);
  const displayedBlogs = blogs.slice(0, (page + 1) * pageSize);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Taza Khabar</h2>
      {loading ? (
        <Loader />
      ) : (
        <List
          blogs={displayedBlogs}
          onLoadMore={loadMore}
          canLoadMore={displayedBlogs.length < blogs.length}
        />
      )}
    </div>
  );
}

export default App;