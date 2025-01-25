// import React from "react";

// const Products = () => {
//   const data = [
//     {
//       id: "1",
//       service: "service1",
//     },
//     {
//       id: "2",
//       service: "service2",
//     },
//     {
//       id: "3",
//       service: "service3",
//     },
//     {
//       id: "4",
//       service: "service4",
//     },
//     {
//       id: "5",
//       service: "service5",
//     },
//   ];
//   return (
//     <div className="h-screen w-screen bg-green-100">
//       {data.map((e) => {
//         <div key={e.id} className="w-2/3 h-68 bg-gray-600">
//           <h1>{e.service}</h1>
//           <button className="w-8 h-8 bg-blue-200">Get Service</button>
//         </div>;
//       })}
//     </div>
//   );
// };

// export default Products;

import React from "react";
import { Link } from "react-router-dom";
import { useData } from "./DataContext";

const Products = () => {
  const data = useData();

  return (
    <div className="h-screen w-[100%] overscroll-x-contain bg-green-100 flex flex-col items-center gap-6 p-4">
      {data.map((e) => (
        <div
          key={e.id}
          className="w-2/3 bg-gray-600 text-white p-4 rounded-md shadow-md"
        >
          <h1 className="text-lg font-bold mb-2">{e.service}</h1>
          <Link to={`/products/${e.id}`}>
            <button className="w-32 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md">
              Get Service
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
