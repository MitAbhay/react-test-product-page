import { useEffect, useState } from "react";
import Product from "./components/Product";
function App() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`, {
        method: "GET",
      });
      const products = await response.json();
      // console.log(response);
      setProducts(products);
    }
    getRecords();

    return;
  }, []);

  return (
    <div className="max-w-8xl mx-auto">
      <div>{/* Search Bar */}</div>
      <h1 className=" py-2 text-5xl font-bold text-center">Products List</h1>
      <hr/>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 space-x-4 space-y-4 m-4">
        {Products.map((product) => {
          return <Product props={product} />;
        })}
      </div>
    </div>
  );
}

export default App;
