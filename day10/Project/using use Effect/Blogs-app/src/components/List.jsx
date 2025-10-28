import Card from "./Card";

function List({ blogs, onLoadMore, canLoadMore }) {
  return (
    <>
      <div className="row">
        {blogs.map((b, index) => (
          <Card key={index} blog={b} />
        ))}
      </div>

      {canLoadMore && (
        <div className="text-center mt-3">
          <button className="btn btn-primary" onClick={onLoadMore}>
            Load More
          </button>
        </div>
      )}
    </>
  );
}

export default List;
