

const Banner = () => {
    return (
        <div className="mt-[4.4rem]">
             <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
        <div className="container mx-auto px-6 flex relative py-16">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col -mt-20 md:mt-0 relative z-20">
                <span className="w-20 h-2 bg-gray-800  mb-12">
                </span>
                <h1 className="font-bebas-neue uppercase text-5xl sm:text-7xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Welcome 
                    <span className="text-4xl sm:text-6xl mt-3">
                    to Home Decor
                    </span>
                </h1>
                <p className="text-sm mt-3 sm:text-base text-gray-700 dark:text-white">
                    Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                </p>
                <div className="flex mt-8">
                    <p href="" className="uppercase cursor-pointer py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                        Get started
                    </p>
                    <p href="" className="uppercase cursor-pointer py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md">
                        Read more
                    </p>
                </div>
            </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                <img src="https://i.ibb.co/DKTZCny/10-removebg-preview.png" className="max-w-xs md:max-w-md m-auto"/>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Banner;