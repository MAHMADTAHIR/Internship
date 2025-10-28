import NewsData from "./NewsData";
function NewsList({ news }) {
  return (
    <div className="row">
      {news.map((item, index) => (
        <div key={index} className="col-md-4 mb-4">
          <NewsData item={item} />
        </div>
      ))}
    </div>
  );
}

export default NewsList;