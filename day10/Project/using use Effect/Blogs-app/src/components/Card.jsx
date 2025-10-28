function Card({ blog }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        {blog.urlToImage && (
          <img
            src={blog.urlToImage}
            className="card-img-top"
            alt="Blog"
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">
            {blog.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
