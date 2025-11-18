import { Link } from "react-router-dom";

export default function FirstCategory() {
  const categories = ["Burger", "Shawarma", "Sandwich", "Fries"];

  return (
    <div>
      <h2>Categories</h2>
      {categories.map((cat) => (
        <div key={cat}>
          <Link to={`/secondcategory/${cat}`}>{cat}</Link>
        </div>
      ))}
    </div>
  );
}
