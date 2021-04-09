import "../styles/App.css";

function App() {
  return (
    <div className="">
      <div className="border-gray-200 border-b      ">
        <div className="flex max-w-screen-2xl mx-auto py-4 md:px-6  justify-between  pr-5 bottom-1 text-gray-500">
          <div className="flex pl-2  md:w-auto w-full  ">
            <div>
              <img
                className=" md:hidden block h-6 filter contrast-0  "
                src="/images/menu.svg"
              />
              <p className=" md:hidden text-xs ">menu</p>
            </div>

            <div className="flex w-full items-center justify-center ">
              <img
                className="xl:h-6 md:block hidden h-4 "
                src="/images/logo.svg"
              />
              <img
                className="xl:h-6  md:hidden pl-24  block h-5  "
                src="/images/logo-icon.svg"
              />
            </div>
            <div className="relative hidden md:block">
              <input
                type="form"
                placeholder="Search Printful"
                className=" xl:ml-40 xl:w-96 w-48 rounded-md ml-10  border border-gray-500 
                text-sm
               text-gray-900
              hover:shadow-lg bg-gray-100 hover:bg-gray-50 focus:bg-white outline-none pl-10 py-2 "
              />
              <img
                src="images/magnify.svg"
                className=" absolute inset-0  filter contrast-0  group-hover:contrast-100 inline-block w-6 ml-2 xl:left-40 left-10 top-2
               "
              />
            </div>
          </div>
          <div className=" text-sm flex items-center space-x-4 flex-shrink-0   ">
            <a href="#" className=" group  flex items-center ">
              <img
                src="images/world.svg"
                className=" hidden  filter contrast-0  group-hover:contrast-100 md:inline-block w-5 
               "
              />
              <span className="group-hover:text-gray-900 align-baseline hidden md:inline-block ">
                Preferences
              </span>
            </a>
            <a href="#" className="group  flex items-center ">
              <img
                src="images/user.svg"
                className="  filter contrast-0  group-hover:contrast-100  inline-block w-5   "
              />
              <span className="group-hover:text-gray-900 hidden md:inline-block ">
                {" "}
                Sign in
              </span>
            </a>
            <a href="#" className="group  flex items-center">
              <img
                src="images/user-add.svg"
                className="  filter contrast-0  group-hover:contrast-100 inline-block w-5  "
              />
              <span className="group-hover:text-gray-900 align-baseline hidden md:inline-block ">
                {" "}
                Sign up
              </span>
            </a>
            <a href="# " className=" flex items-center">
              <img
                src="images/cart.svg"
                className="filter contrast-0   inline-block w-5  "
              />
              <span className="align-baseline hidden md:inline-block">
                My cart
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="relative flex  p-4  border-gray-200 border-b   md:hidden">
        <input
          type="form"
          placeholder="Search Printful"
          className=" w-full rounded-md  border border-gray-500 
                text-sm
               text-gray-900
              hover:shadow-lg bg-gray-100 hover:bg-gray-50 focus:bg-white outline-none pl-10 py-1 "
        />
        <img
          src="images/magnify.svg"
          className=" absolute inset-0  filter contrast-0  group-hover:contrast-100 inline-block w-5 ml-2  left-4 top-5
               "
        />
      </div>
      <div className="border-gray-200   md:border-b py-1  ">
        <div className="  max-w-screen-2xl mx-auto pl-12 pr-4 pb-4 space-x-5 text-sm mt-4   text-gray-500 hidden md:block">
          <a href="# " className="hover:text-gray-900 group">
            Products
            <img
              className="xl:h-6 transform transition  group-hover:-rotate-180 ease-in-out duration-300 hidden filter contrast-0   md:inline-block h-5  "
              src="/images/arrow.svg"
            />
          </a>
          <a href="#" className="hover:text-gray-900 group">
            Services
            <img
              className="xl:h-6 transform transition  group-hover:-rotate-180 ease-in-out duration-300 hidden filter contrast-0   md:inline-block h-5  "
              src="/images/arrow.svg"
            />
          </a>
          <a href="#" className="hover:text-gray-900 group">
            Integrations
            <img
              className="xl:h-6 transform transition  group-hover:-rotate-180 ease-in-out duration-300 hidden filter contrast-0   md:inline-block h-5  "
              src="/images/arrow.svg"
            />
          </a>
          <a href="#" className="hover:text-gray-900 group">
            How it works
            <img
              className="xl:h-6 transform transition  group-hover:-rotate-180 ease-in-out duration-300 hidden filter contrast-0   md:inline-block h-5  "
              src="/images/arrow.svg"
            />
          </a>
          <a href="#" className="hover:text-gray-900">
            Mockup Generator
          </a>
          <a href="#" className="hover:text-gray-900 group">
            Resources
            <img
              className="xl:h-6 transform transition  group-hover:-rotate-180 ease-in-out duration-300 hidden filter contrast-0   md:inline-block h-5  "
              src="/images/arrow.svg"
            />
          </a>
          <a href="#" className="hover:text-gray-900">
            Blog
          </a>
        </div>
      </div>

      <div>
        <div className="flex space-x-2 pt-4 pl-12 max-w-screen-2xl mx-auto text-sm   ">
          <a
            href="#"
            className=" text-UrlBlue tracking-wide   hover:border-UrlBlue border-b border-transparent  "
          >
            Products
          </a>
          <span> / </span>

          <a
            href="#"
            className=" text-UrlBlue tracking-wide hover:border-UrlBlue border-b border-transparent  "
          >
            Men's
          </a>

          <span> / </span>
          <a
            href="#"
            className=" text-UrlBlue tracking-wide hover:border-UrlBlue border-b border-transparent "
          >
            Shirts
          </a>
          <span> / </span>
          <a
            href="#"
            className=" text-UrlBlue tracking-wide hover:border-UrlBlue border-b border-transparent "
          >
            T-Shirts
          </a>
          <span> / </span>
          <span className="font-bold">
            Unisex Basic Softstyle T-Shirt | Gildan 64000
          </span>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center mt-10">
          <h1 className=" text-2xl font-bold">
            Unisex Basic Softstyle T-Shirt | Gildan 64000
          </h1>
        </div>

        <div className="flex justify-center items-center mt-6">
          <div>
            <span className="text-gray-500 line-through text-xl">$54.00</span>
            <span className="text-red-500 pl-2 text-xl">$40.50</span>
          </div>
        </div>

        <div className=" flex justify-center space-x-2 mt-4 items-center  ">
          <img src="images/star.svg" className=" h-4  " />
          <img src="images/star.svg" className="h-4 " />
          <img src="images/star.svg" className=" h-4" />
          <img src="images/star.svg" className=" h-4" />
          <img src="images/star.svg" className=" h-4" />
          <a
            href="#"
            className="text-UrlBlue hover:border-UrlBlue border-b border-transparent"
          >
            {" "}
            1176 Reviews
          </a>
        </div>
        <div className=" flex justify-center space-x-2 mt-4 items-center font-bold  ">
          Choose color
        </div>
        <div className=" flex justify-center space-x-2 mt-2 items-center    ">
          <input
            type="checkbox"
            className="h-7 w-7 rounded-lg bg-blue-900  text-blue-900 "
          />

          <input
            type="checkbox"
            className=" bg-black text-black h-7 w-7  rounded-lg "
          />
          <input
            type="checkbox"
            className="h-7 w-7 rounded-lg bg-gray-800 text-gray-800 "
          />
          <input
            type="checkbox"
            className="h-7 w-7 rounded-lg text-gray-500 bg-gray-500 "
          />
          <input
            type="checkbox"
            className="h-7 w-7 text-gray-100 bg-gray-100 rounded-lg "
          />
        </div>
        <div className=" flex justify-center space-x-2 mt-6 items-center font-bold  ">
          Choose Size
          <div className="text-UrlBlue none">Size guide</div>
        </div>
        <div className=" flex justify-center space-x-2 mt-2 items-center font-bold  ">
          <button className="border py-2 px-4 hover:bg-gray-100 hover:shadow-lg shadow-inner	 font-bold">
            S
          </button>
          <button className="border hover:bg-gray-100 hover:shadow-lg py-2 px-3 font-bold">
            M
          </button>
          <button className="border hover:bg-gray-100 hover:shadow-lg py-2 px-4 font-bold">
            L
          </button>
          <button className="border hover:bg-gray-100 hover:shadow-lg py-2 px-3 font-bold">
            XL
          </button>
          <button className="border hover:bg-gray-100 hover:shadow-lg py-2 px-2 font-bold">
            2XL
          </button>
          <button className="border hover:bg-gray-100 hover:shadow-lg py-2 px-2 font-bold">
            3XL
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center mt-6">
        <h3 className="font-bold">Estimated delivery to</h3>
      </div>

      <div className="flex justify-center items-center">
        <img src="images/ca.svg" className=" h-4 " />
        <p className=" "> Canada</p>
      </div>

      <div className="flex justify-center items-center mt-2">
        <p className=" text-2xl font-bold">Apr 15–23</p>
      </div>
      <div className="flex justify-center items-center mt-6">
        <button className="uppercase text-white bg-black w-72 h-10 hover:bg-gray-500 transition transform duration-300 ease-in-out ">
          Add to Bag
        </button>
      </div>
    </div>
  );
}

export default App;

// <div className=" flex h-screen justify-center items-center text-xl font-bold  ">
// hi
// </div>
