import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState([]);
  const [checkout, setCheckOut] = useState(false);
  
 
  
  let Links = [
    { name: 'Home', link: '/', id: 1 },
    { name: 'About Us', link: '/shop', id: 2 },
    { name: 'Products', link: '/products', id: 3 },
    { name: 'Contact Us', link: '/contactUs', id: 4 },
  ];

  const handleCheckout = () => {
    setCheckOut(!checkout);
  };

  useEffect(() =>{
    axios.get('http://localhost:5000/cartData')
    .then(res => setProduct(res.data))
    .catch(error => console.error(error))
},[product])

let totalPrice = 0;

// console.log(totalPrice);
if(product){
  product.forEach(item =>{
    totalPrice +=  item?.price

  })
}

const handleDelete =(data) =>{
axios.delete('http://localhost:5000/cartData',{data} )
console.log(data);
}

  return (
    <div className='relative'>
      <div className="shadow-md border w-full fixed top-0 left-0 z-50">
        <div className="flex justify-between items-center bg-white py-3 md:px-5 px-7">
          <div className="font-bold text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            <Link to="/" className="text-gray-800">
              <img src="https://i.ibb.co/9Wmvqhy/logo-home.png" alt="" className='w-5 md:w-8 lg:w-14 xl:w-10 2xl:w-12' />
            </Link>
          </div>
          
          <div onClick={() => setOpen(!open)} className="text-3xl text-center absolute right-8 top-3 cursor-pointer md:hidden">
            {open ? <IoMdClose /> : <IoMdMenu />}
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 text-center absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16' : 'top-[-490px]'} `}>
            {
              Links.map((nav) => (
                <li className="md:ml-8 cursor-pointer text-sm md:text-[96%] xl:text-base 2xl:text-xl md:my-0 my-7" key={nav.id}>
                  {nav.name}
                </li>
              ))
            }
          </ul>

          <div className='flex mr-16 md:mr-0 lg:mr-0 xl:mr-0 2xl:mr-0 gap-3'>
            <div className="flex items-center justify-center bg-white">
              <div className="relative scale-75 " onClick={handleCheckout}>
                <button  className='w-8 h-8'>
                  <HiShoppingCart className="h-8  w-8 text-black" />
                </button>
                <span className="absolute -top-2 left-4 rounded-full bg-pink-500 p-0.5 px-2 text-sm text-red-50">{product.length}</span>
              </div>
            </div>
            <FaUser className='w-6 h-6 cursor-pointer' />
          </div>
        </div>
      </div>

      {checkout && (
        <div className="fixed inset-0  0 z-40" onClick={handleCheckout}></div>
      )}
      

      {/* Checkout */}
      {checkout && (
        <div className='fixed top-[4.8rem] w-72 right-0 max-h-screen z-40 '>
          <div className="px-4 py-4 w-full h-screen max-w-lg bg-white rounded-xl shadow-md space-y-4 ">
            {
              product.map(myData =>(

            <div className="flex items-center space-x-8 gap-8 " key={myData._id}>
              <img className="h-20 rounded-lg w-20 " src={myData.imageUrl} alt="Micro Backpack" />
              <div>
                <h3 className="text-xl font-medium">{myData.name}</h3>
                <p className="text-gray-500">${myData.price}</p>
              </div>
            </div>
              ))
            }
            
            
            <div className="text-right space-y-3">
              
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>
            </div>

            <div className=" flex justify-between gap-5">
             <Link to={'/checkout'} className="w-full p-2 text-xs md:text-lg  bg-pink-500 text-white rounded-md text-center" >
             <button >
                Checkout
              </button>
             </Link>
              <button onClick={()=>handleDelete(product)} className="w-full p-2 bg-pink-500 text-sm md:text-lg text-white rounded-md">
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
