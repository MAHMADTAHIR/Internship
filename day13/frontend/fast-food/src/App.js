// import { useState } from "react";
// import axios from "axios";

// export default function App() {
//   const [category, setCategory] = useState("");
//   const [subName, setSubName] = useState("");
//   const [subPrice, setSubPrice] = useState("");
//   const [addonName, setAddonName] = useState("");
//   const [addonPrice, setAddonPrice] = useState("");

//   const saveCategory = async () => {
//     console.log("category", category);
//     await axios.post("http://localhost:5000/api/category", {
//       name: category,
//     });
//   };

//   const saveSub = async () => {
//     await axios.post("http://localhost:5000/api/subcategory", {
//       name: subName,
//       price: Number(subPrice),
//     });
//   };

//   const saveAddon = async () => {
//     await axios.post("http://localhost:5000/api/addons", {
//       name: addonName,
//       price: Number(addonPrice),
//     });
//   };

//   return (
//     <div>
//       <h3>Category</h3>
//       <input placeholder="Name" onChange={(e) => setCategory(e.target.value)} />
//       <button onClick={saveCategory}>Save</button>

//       <h3>SubCategory</h3>
//       <input placeholder="Name" onChange={(e) => setSubName(e.target.value)} />
//       <input placeholder="Price" onChange={(e) => setSubPrice(e.target.value)} />
//       <button onClick={saveSub}>Save</button>

//       <h3>Addon</h3>
//       <input placeholder="Name" onChange={(e) => setAddonName(e.target.value)} />
//       <input placeholder="Price" onChange={(e) => setAddonPrice(e.target.value)} />
//       <button onClick={saveAddon}>Save</button>
//     </div>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstCategory from "./pages/FirstCategory";
import SecondCategory from "./pages/SecondCategory";
import AddOns from "./pages/AddOns";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/firstcategory" element={<FirstCategory />} />
        <Route path="/secondcategory/:category" element={<SecondCategory />} />
        <Route path="/addons/:product" element={<AddOns />} />
      </Routes>
    </BrowserRouter>
  );
}
