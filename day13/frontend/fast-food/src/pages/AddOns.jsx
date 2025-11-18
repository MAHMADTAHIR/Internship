export default function AddOns() {
  const addons = ["Extra Sauce", "Extra Cheese", "Cold Drink"];
  return (
    <div>
      <h2>Add-Ons</h2>
      {addons.map((a) => (
        <div key={a}>{a}</div>
      ))}
    </div>
  );
}
