import "../styles/App.css";

function App() {
  return (
    <div className="">
      <div className="border-gray-100 border-b-2    ">
        <div className="flex max-w-screen-2xl mx-auto py-4 md:px-6 xl:justify-between justify-between md:justify-around pr-5 bottom-1 text-gray-500">
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
            <a href="#" className=" group  ">
              <img
                src="images/world.svg"
                className=" hidden  filter contrast-0  group-hover:contrast-100 md:inline-block w-5 
               "
              />
              <span className="group-hover:text-gray-900 align-baseline hidden md:inline-block ">
                Preferences
              </span>
            </a>
            <a href="#" className="group ">
              <img
                src="images/user.svg"
                className="  filter contrast-0  group-hover:contrast-100  inline-block w-5   "
              />
              <span className="group-hover:text-gray-900 hidden md:inline-block ">
                {" "}
                Sign in
              </span>
            </a>
            <a href="#" className="group">
              <img
                src="images/user-add.svg"
                className="  filter contrast-0  group-hover:contrast-100 inline-block w-5  "
              />
              <span className="group-hover:text-gray-900 align-baseline hidden md:inline-block ">
                {" "}
                Sign up
              </span>
            </a>
            <a href="#">
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
      <div className="border-gray-100   md:border-b-2 py-1  ">
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
      <div className=" flex h-screen justify-center items-center text-xl font-bold  ">
        hi
      </div>
    </div>
  );
}

export default App;
