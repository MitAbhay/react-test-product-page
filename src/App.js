import { useEffect, useState } from "react";
import "instantsearch.css/themes/satellite.css";
import algoliasearch from "algoliasearch/lite";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch-hooks-web";
import product from "./components/Product";

function App() {
  const searchClient = algoliasearch(
    "S7Z8AD7A1J", // API Keys -- will be save in .env file later
    "4ba70fde430a86db64ac81bc151e12d2"
  );
  // const index = searchClient.initIndex('react-test-2');

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

  // index.savebjects(Products);

  return (
    <div className="max-w-8xl mx-auto">
      <h1 className=" py-2 text-5xl font-bold text-center">Products List</h1>{" "}
      <div className="items-center text-center">
        <InstantSearch searchClient={searchClient} indexName="react-test">
          <SearchBox className="p-2 " />
          <Hits className="text-center" hitComponent={product} />
        </InstantSearch>
      </div>
      <hr />
    </div>
  );
}

export default App;

//  {/* <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 space-x-4 space-y-4 m-4">
//         {Products.map((product) => {
//           return <Product hit={product} />;
//         })}
//       </div> */}
