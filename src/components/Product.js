import React from "react";

function Product({ props }) {
  // console.log(props);
  return (
    <div className="items-center text-center p-2 rounded-lg border hover:border-gray-600 cursor-pointer">
      <div className="space-x-2 text-center py-4 ite">
        <span className="bg-black text-white rounded-full px-2">
          {props.Type}
        </span>
        <span className="bg-black text-white rounded-full px-2">
          {props.SKU}
        </span>
      </div>
      <img
        className="h-40 w-30 shadow-sm object-cover mx-auto"
        src={props.Images ? props.Images : "https://media.istockphoto.com/photos/elegance-peach-vintage-dress-isolated-on-white-background-picture-id1217970962?k=20&m=1217970962&s=612x612&w=0&h=XJeWZiOrycXuEawk2SnjXqCFpjZ9mMUPNKJqnx82ziU="}
        alt="product"
      />
      <div>
        <h2 className="text-lg text-gray-500 hover:text-black">{props.Name}</h2>
        {/* <p>{props.description}</p> */}
      </div>
    </div>
  );
}

export default Product;
