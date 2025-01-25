// import React from "react";
// import { useParams } from "react-router-dom";

// const ProductDetails = () => {
//   const { id } = useParams();
//   return (
//     <div className="h-[80vh] w-100%">
//       <h1>Services:</h1>
//       <p>id:{id}</p>
//     </div>
//   );
// };

// export default ProductDetails;

import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "./DataContext";

const ProductDetails = () => {
  const { id } = useParams(); // Access the dynamic id from the route
  const data = useData();
  const product = data.find((item) => item.id === id);
  return (
    <div className="h-[80vh] w-100% bg-blue-200 flex justify-center items-center">
      <div className="w-80 h-96 bg-gray-400 text-xl font-semibold flex flex-col justify-around items-center">
        <div>
          <h1>Services:{product.service}</h1>
          <p>id: {product.id}</p>
        </div>
        <img className="h-56 w-56 rounded-xl" src={product.img} />
        <button className="w-32 px-4 py-2 bg-red-600 rounded-lg">
          Visit Me!
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
