import { Link, useParams} from "react-router-dom";

export default function SecondCategory() {
  const { category } = useParams();

   const productsMap = {
    Burger: ["Zinger Burger 250Rs", "Chicken Burger 200Rs"],
    Shawarma: ["Zinger Shawarma 250Rs", "Chicken Shawarma 200Rs"],
    Sandwich: ["Club Sandwich 300Rs", "Chicken Sandwich 250Rs"],
    Fries: ["Loaded Fries 500r", "Cheesios Fries"],
  };

  const products = productsMap[category] || [];

  return (
    <div>
      <h2>Products</h2>
      {products.map((p) => (
        <div key={p}>
          <Link to={`/addons/${p}`}>{p}</Link>
        </div>
      ))}
    </div>
  );
}
