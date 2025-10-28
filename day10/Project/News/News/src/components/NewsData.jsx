function NewsData({ item }) {
  return (
    <div className="card h-100 shadow-sm">
      {item.urlToImage && (
        <img
          src={item.urlToImage}
          className="card-img-top"
          alt="News"
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">
          {item.description}
        </p>
        <a
          href={item.url}
          target="_blank"
          className="btn btn-primary btn-sm"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
export default NewsData;