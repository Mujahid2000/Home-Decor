import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { Toaster, toast } from "sonner";
import { AuthContext } from "../Config/AuthContext";

const CheckoutPage = () => {
  const [product, setProduct] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const userEmail = user?.email;
  const formRef = useRef();
  const dualCurrencyRef = useRef();
  const paypalref = useRef();


// console.log(product);
    const handleCheckout = (e) =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const first_name = form.get('first-name');
        const last_name = form.get('last-name');
        const phone = form.get('phone');
        const email = form.get('email');
        const address = form.get('address');
        const date = form.get('date');
        const time = form.get('time');
        const area = form.get('area');
        const city = form.get('city');
        const state = form.get('state');
        const post_code = form.get('post-code');
        const dualCurrencyValue = dualCurrencyRef.current.checked ? dualCurrencyRef.current.value : null;
        const paypal = paypalref.current.checked ? paypalref.current.value : null;
        const deliverInfo = {first_name, last_name, phone,email,address,date,time, area,city, state,post_code , dualCurrencyValue, paypal};


        axios.post('https://project-orpin-iota.vercel.app/deliveryinfo', {deliverInfo, product , userEmail})
        .then((response) => console.log(response));
        toast.success("Order Success")
    }

    

    useEffect(() =>{
      axios.get(`https://project-orpin-iota.vercel.app/cartData`)
      .then(res => setProduct(res.data))
      .catch(error => console.error(error))
  },[product, email])

  let totalPrice = 0;

if(product){
  product.forEach(item =>{
    totalPrice += item.price
  })
}
  


  return (
    <div className="mt-[5rem] flex flex-col md:flex-col md:items-center lg:flex-col lg:items-center xl:items-start xl:flex-row 2xl:flex-row md:justify-center lg:justify-center xl:justify-evenly 2xl:justify-evenly">
     <div className="flex items-center justify-center p-8">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <form ref={formRef} onSubmit={handleCheckout}>
          <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
            Personal Information
          </label>
          <div className="flex justify-between gap-3">
            <div className="mb-5">
              <label
                htmlFor="first-name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                First Name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="First Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-pink-500 focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="last-name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Last Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-pink-500 focus:shadow-md"
              />
            </div>
          </div>
          <div className="flex justify-between gap-3 flex-row-reverse">
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-pink-500 focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-pink-500 focus:shadow-md"
              />
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="address"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Mailing Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Enter your mailing address"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-pink-500 focus:shadow-md"
            />
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-pink-500 focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="time"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-pink-500 focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="mb-5 pt-3">
            <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
              Address Details
            </label>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="area"
                    id="area"
                    placeholder="Enter area"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-pink-500 focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter city"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-pink-500 focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="Enter state"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-pink-500 focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="post-code"
                    id="post-code"
                    placeholder="Post Code"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-pink-500 focus:shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 flex ">
          <div className="px-2">
        <label htmlFor="type1" className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="type"
            value="DualCurrency"
            id="type1"
            ref={dualCurrencyRef}
            className="form-radio h-5 w-5 text-indigo-500"
          />
          <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3" alt="Dual Currency"/>
        </label>
      </div>
            <div className="px-2 flex justify-center items-center">
                <label htmlFor="type2" className="flex items-center cursor-pointer"/>
                    <input type="radio" name="paypal" ref={paypalref} value='paypal'
                    id="paypal" className="form-radio h-5 w-5 text-indigo-500"/>
                    <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8 ml-3"/>
              
            </div>
        </div>
          <div>
            <button
              type="submit"
              className="hover:shadow-form w-full rounded-md bg-pink-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>

      <div className=" bg-white max-w-xl px-2">
        <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8">
          Order Summary
        </h1>
          {
            product.map(myData =>(
              <ul className="py-6 border-b space-y-6 px-8" key={myData._id}>
              <li className="grid grid-cols-6 gap-2 border-b-1" >
            <div className="col-span-1 self-center">
              <img
                src={myData.imageUrl}
                alt="Product"
                className="rounded "
              />
            </div>
            <div className="flex flex-col col-span-3 pt-2">
              <span className="text-gray-600 text-md font-semi-bold">
                {myData.name}
              </span>
              <span className="text-gray-400 text-sm inline-block pt-2">
                Red Headphone
              </span>
            </div>
            <div className="col-span-2 pt-3">
              <div className="flex items-center space-x-2 text-sm justify-between">
                <span className="text-gray-400">2 x ${myData.price}</span>
                <span className="text-pink-400 font-semibold inline-block">
                  ${2 * myData.price}
                </span>
              </div>
            </div>
          </li>
        </ul>
            ))
          }
          
        <div className="px-8 border-b">
          <div className="flex justify-between py-4 text-gray-600">
            <span>Subtotal</span>
            <span className="font-semibold text-pink-500">${totalPrice}</span>
          </div>
          <div className="flex justify-between py-4 text-gray-600">
            <span>Shipping</span>
            <span className="font-semibold text-pink-500">Free</span>
          </div>
        </div>
        <div className="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
          <span>Total</span>
          <span>${totalPrice}</span>
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
    </div>
  );
};

export default CheckoutPage;
