import axios from "axios";
import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Toaster, toast } from "sonner";

const ProductCard = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(res => setProductData(res.data))
      .catch(error => console.error(error));
  }, []);

  const handleAddtoCart= (data) =>{
    axios.post('http://localhost:5000/addCart', data)
    .then((response) => console.log(response));
    toast.success("Item added to cart!")
  }

  return (
   <div className=" mx-auto">
     <div className="flex flex-wrap justify-center">
      {productData.map(product => (
        <div key={product._id} className="max-w-xs rounded overflow-hidden shadow-lg m-4">
          <img
            className="w-full h-[16rem]"
            src={product.imageUrl}
            alt={product.name}
          />
          <div className="px-6 py-4 h-28">
            <div className="flex justify-between">
              <h3 className="font-bold text-xl mb-2">{product.name.slice(0, 19)}</h3>
              <p className="font-bold text-base mb-2">${product.price}</p>
            </div>
            <p className="text-gray-700 text-base">
              {product.description}
            </p>
          </div>
          <button onClick={()=> handleAddtoCart(product)} className="bg-pink-500 w-full flex justify-center items-center gap-4 active:bg-slate-400 text-white text-sm font-bold py-3 px-4 rounded-b-md">
            ADD TO CART <FaCartPlus className="text-xl"/>
          </button>
        </div>
      ))}
    </div>
    <Toaster
        position="bottom-right"
        toastOptions={{
          classNames: {
            success: "text-green-400",
          },
        }}
      />
   </div>
  );
};

export default ProductCard;