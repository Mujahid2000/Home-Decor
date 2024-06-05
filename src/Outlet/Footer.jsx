import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white py-10 mt-16 ">
        <div className=" mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
              <img
                src="https://i.ibb.co/9Wmvqhy/logo-home.png"
                alt=""
                className="w-16 pb-6"
              />
              <p className="text-gray-600 mt-2 w-[350px]">
                Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at <br /> Hampden.
              </p>
              <div className="flex mt-4 gap-3">
                <div className="bg-white rounded-full p-2 border-2 border-pink-200">
                  <FaLinkedinIn className="text-sm text-gray-700" />
                </div>
                <div className="bg-white rounded-full p-2 border-2 border-pink-200">
                  <FaSquareInstagram className="text-sm text-gray-700" />
                </div>
                <div className="bg-white rounded-full p-2 border-2 border-pink-200">
                  <FaTwitter className="text-sm text-gray-700" />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <div className="flex justify-between md:justify-between lg:justify-evenly xl:justify-evenly 2xl:justify-evenly">
                <div>
                  <h5 className="text-bodyText text-lg 2xl:text-xl pb-6 font-bold leading-custom-30 tracking-normal text-left">
                    Support
                  </h5>
                  <ul>
                    <li className="mb-2">
                      <p className="text-gray-600 hover:text-gray-800 text-sm  2xl:text-base">
                        Privacy Policy
                      </p>
                    </li>
                    <li className="mb-2">
                      <p className="text-gray-600 hover:text-gray-800 text-sm  2xl:text-base">
                        Terms & Conditions
                      </p>
                    </li>
                    <li className="mb-2">
                      <p className="text-gray-600 hover:text-gray-800 text-sm  2xl:text-base">
                        Product FAQs
                      </p>
                    </li>
                    <li className="mb-2">
                      <p className="text-gray-600 hover:text-gray-800 text-sm  2xl:text-base">
                        Company Support
                      </p>
                    </li>
                    <li>
                      <p className="text-gray-600 hover:text-gray-800 text-sm  2xl:text-base">
                        Manage Account
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="mx-1">
                  <h5 className="text-bodyText text-lg 2xl:text-xl pb-6 font-bold leading-custom-30 tracking-normal text-left">
                    Quick Links
                  </h5>
                  <ul>
                    <li className="mb-2">
                      <p className="text-gray-600 hover:text-gray-800 text-sm  2xl:text-base">
                        About Us
                      </p>
                    </li>
                    <li className="mb-2">
                      <p className="text-gray-600 hover:text-gray-800 text-sm  2xl:text-base">
                        Blog Post
                      </p>
                    </li>
                    <li className="mb-2">
                      <p className="text-gray-600 hover:text-gray-800 text-sm  2xl:text-base">
                        Product Features
                      </p>
                    </li>
                    <li className="mb-2">
                      <p className="text-gray-600 hover:text-gray-800 text-sm  2xl:text-base">
                        Company Info
                      </p>
                    </li>
                    <li>
                      <p className="text-gray-600 hover:text-gray-800 text-sm  2xl:text-base">
                        Company Info
                      </p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-bodyText text-lg 2xl:text-xl pb-6 font-bold leading-custom-30 tracking-normal text-left">
                    Community
                  </h5>
                  <ul>
                    <li className="mb-2">
                      <p className="text-gray-600 hover:text-gray-800 text-sm  2xl:text-base">
                        Become an Affiliate
                      </p>
                    </li>
                    <li className="mb-2">
                      <p className="text-gray-600 hover:text-gray-800 text-sm  2xl:text-base">
                        Help Center
                      </p>
                    </li>
                    <li className="mb-2">
                      <p className="text-gray-600 hover:text-gray-800 text-sm  2xl:text-base">
                        Product FAQs
                      </p>
                    </li>
                    <li className="mb-2">
                      <p className="text-gray-600 hover:text-gray-800 text-sm  2xl:text-base">
                        Our Forums
                      </p>
                    </li>
                    <li>
                      <p className="text-gray-600 hover:text-gray-800 text-sm  2xl:text-base">
                        Product API
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-[#FED29C] mt-8 pt-6 flex justify-between gap-2 text-sm  2xl:text-base text-gray-500">
            <div>Copyright &copy; 2023 All rights reserved by Home Decor.</div>
            <div className="flex gap-6">
              <p className="hover:text-gray-800">Privacy Policy</p>
              <p className="hover:text-gray-800">Terms of Service</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
