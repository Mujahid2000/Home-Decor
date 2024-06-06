import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {   FaCartPlus  } from "react-icons/fa";
import { Toaster, toast } from "sonner";
import { AuthContext } from "../Config/AuthContext";

const ProductCard = () => {
  const [productData, setProductData] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user?.email
  useEffect(() => {
    axios.get('https://project-orpin-iota.vercel.app/products')
      .then(res => setProductData(res.data))
      .catch(error => console.error(error));
  }, []);

  const handleAddtoCart= (data) =>{
    if(email){
      axios.post('https://project-orpin-iota.vercel.app/addCart', {data, email})
      .then((response) => console.log(response));
      toast.success("Item added to cart!")

    }else{
      alert('Please Login')
    }
  }

  return (
   <div className="   mt-5">
    
     <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 justify-center items-center">
      {productData.map(product => (
        <div key={product._id} className="rounded w-80  shadow-lg">
       
          <div className="relative">
            <img className="w-full h-64 px-3 py-1" src={product.imageUrl} alt="Sunset in the mountains" />
            <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
            
            
          </div>
          <div className="px-6 py-4">
            <h3 className="font-semibold text-xl inline-block hover:text-pink-600 transition duration-500 ease-in-out">{product.name.slice(0, 19)}</h3>
            <p className="text-gray-500 text-sm">{product.description}            </p>
            
           
            <p className="text-black text-base font-bold ">${product.price}</p>
  
           
          </div>
        
        <div className="px-6 pb-4 flex flex-row items-center">
          <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
            <button onClick={() => { handleAddtoCart(product)}} className="bg-pink-600 hover:bg-pink-500 active:bg-pink-600 py-2 rounded-md px-3 text-white">Add to cart</button>
          </span>
        </div>
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
