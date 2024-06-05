

const OrganicCotton = () => {
    return (
      <div className="flex justify-evenly flex-col lg:flex-row mt-9 px-3 gap-3 mx-auto items-center">
        <div className="max-w-[500px] max-h-[400px] bg-[#F3F5F6] rounded-2xl">
        <div className="p-8 flex-1">
                    <h2 className="text-4xl font-bold text-pink-500">Organic Cotton and Bamboo</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Designed to please you with the best of Turkish’s heritage in fabrics. Made from bamboo and cotton fibers,
                        these towels gather the best from two worlds to offer soft, super-absorbent fabric that is also antibacterial
                        thanks to the natural properties of bamboo.
                    </p>
                    <button className="mt-8 bg-black text-white px-4 py-2 rounded-md">
                        SHOP NOW &rarr;
                    </button>
                </div>
        </div>
        <div>
          <img className="rounded-2xl max-w[600px] max-h-[500px]" src="https://i.ibb.co/KW9zqy6/image-17.png" alt="" />
        </div>
      </div>
    );
};

export default OrganicCotton;