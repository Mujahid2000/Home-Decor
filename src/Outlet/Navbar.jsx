import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { FaTrash, FaUser } from 'react-icons/fa';
import { HiShoppingCart } from 'react-icons/hi';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Component/Config/AuthContext';
import { AiOutlineLogout } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [product, setProduct] = useState([]);
  const [checkout, setCheckOut] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  

  let Links = [
    { name: 'Home', link: '/', id: 1 },
    { name: 'About Us', link: '/about', id: 2 },
    { name: 'Contact Us', link: '/contact', id: 3 },
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
axios.delete('https://project-orpin-iota.vercel.app/cartData',{data} )

}


const handleLogOut = () =>{
  logOut()
  .then(() => {})
  .catch(console.error)
}

const handleSingleProductDelete = (data) =>{
    axios.delete('https://project-orpin-iota.vercel.app/singledata', {data});
}

  return (
    <div className='relative'>
      <div className="shadow-md border w-full fixed top-0 left-0 z-50">
        <div className="flex justify-between items-center bg-white py-3 md:px-5 px-7">
          <div className="font-bold text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            <Link to="/" className="text-gray-800">
              <img src="https://i.ibb.co/7tcxRQb/logo-removebg-preview.png" alt="" className='w-5 md:w-8 lg:w-14 xl:w-10 2xl:w-12' />
            </Link>
          </div>
          
          <div onClick={() => setOpen(!open)} className="text-3xl text-center absolute right-8 top-3 cursor-pointer md:hidden">
            {open ? <IoMdClose /> : <IoMdMenu />}
          </div>
          <ul className={`md:flex md:items-center md:pb-0 pb-12 text-center absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16' : 'top-[-490px]'} `}>
            {
              Links.map((nav) => (
                <Link key={nav.id} to={nav.link}>
                <li className="md:ml-8 cursor-pointer text-sm md:text-[96%] xl:text-base 2xl:text-xl md:my-0 my-7" >
                  {nav.name}
                </li>
                </Link>
              ))
            }
          </ul>

          <div className='flex justify-center items-center mr-16 md:mr-0 lg:mr-0 xl:mr-0 2xl:mr-0 gap-3'>
      <div className="flex items-center justify-center bg-white">
        <div className="relative mt-2 scale-75" onClick={handleCheckout}>
          <button className='w-8 h-8'>
            <HiShoppingCart className="h-8 w-8 text-black" />
          </button>
          <span className="absolute -top-2 left-4 rounded-full bg-pink-500 p-0.5 px-2 text-sm text-red-50">{product.length}</span>
        </div>
        {menu && <div className="fixed inset-0" onClick={() => setMenu(false)}></div>}
      </div>

      {user ? (
        <div className="ml-5 relative">
          <img
            onClick={() => setMenu(!menu)}
            src={user?.photoURL}
            alt="User"
            className="w-8 h-8 rounded-full cursor-pointer"
          />
          {menu && (
            <ul
              role="menu"
              data-popover="profile-menu"
              data-popover-placement="bottom"
              className="absolute z-10 flex min-w-[180px] flex-col gap-2 overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg right-0 top-10 shadow-blue-gray-500/10 focus:outline-none"
            >
              <Link to={'/profile'}>
                <button
                  tabIndex="-1"
                  role="menuitem"
                  className="flex hover:bg-slate-200 w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <CgProfile className="w-4 h-4 rotate-0" />
                  <p className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
                    My Profile
                  </p>
                </button>
              </Link>
              <button
                onClick={handleLogOut}
                tabIndex="-1"
                role="menuitem"
                className="flex w-full cursor-pointer hover:bg-slate-200 select-none items-center gap-2 rounded-md px-3 pt-[2px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
              >
                <AiOutlineLogout className="w-4 h-4 rotate-0" />
                <p className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
                  Sign Out
                </p>
              </button>
            </ul>
          )}
        </div>
      ) : (
        <Link to={'/signIn'}>
          <button className="bg-pink-600 active:bg-pink-700 text-white font-Poppins py-2 px-6 rounded md:ml-8 hover:bg-pink-500 duration-500">
            LOG IN
          </button>
        </Link>
      )}
    </div>
        </div>
      </div>

      {checkout && (
        <div className="fixed inset-0  0 z-40" onClick={handleCheckout}></div>
      )}
      

      {/* Checkout */}
      {checkout && (
        <div className='fixed top-[5rem] w-80 right-0 max-h-screen z-40 '>
          <div className="px-4 py-4 w-full h-screen max-w-lg bg-white rounded-xl shadow-md space-y-4 ">
          {
  product.map(myData => (
    <div className="flex items-center gap-3" key={myData._id}>
      <img className="h-12 w-12 rounded-lg" src={myData.imageUrl} alt={myData.name} />
      <div>
        <h3 className="text-base font-medium">{myData.name}</h3>
        <p className="text-gray-500">${myData.price}</p>
      </div>
      <button onClick={()=> handleSingleProductDelete(myData)} className="ml-auto">
        <FaTrash />
      </button>
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
