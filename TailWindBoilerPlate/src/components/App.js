import "../styles/App.css";

function App() {
  return (
    <div>
      <div className="flex py-4 px-6 justify-between bottom-1 border-gray-100  border-2 text-gray-500">
        <div className="flex justify-between ">
          <div className="flex items-center ">
            <img className="h-6 " src="/images/logo.svg" />
          </div>
          <div className="relative">
            <input
              type="form"
              placeholder="Search Printful"
              className=" ml-40 w-80 rounded-md  border border-gray-500 
                text-sm
               text-gray-900
              hover:shadow-lg bg-gray-100 hover:bg-gray-50 focus:bg-white outline-none pl-10 py-2 "
            />
            <img
              src="images/magnify.svg"
              className=" absolute inset-0  filter contrast-0  group-hover:contrast-100 inline-block w-6 ml-2 left-40 top-2
               "
            />
          </div>
        </div>
        <div className=" text-sm flex items-center space-x-4">
          <a href="#" className=" group ">
            <img
              src="images/world.svg"
              className="  filter contrast-0  group-hover:contrast-100 inline-block w-5 
               "
            />
            <span className="group-hover:text-gray-900 align-baseline ">
              Preferences
            </span>
          </a>
          <a href="#" className="group ">
            <img
              src="images/user.svg"
              className="  filter contrast-0  group-hover:contrast-100  inline-block w-5   "
            />
            <span className="group-hover:text-gray-900  "> Sign in</span>
          </a>
          <a href="#" className="group">
            <img
              src="images/user-add.svg"
              className="  filter contrast-0  group-hover:contrast-100 inline-block w-5  "
            />
            <span className="group-hover:text-gray-900 align-baseline ">
              {" "}
              Sign up
            </span>
          </a>
          <a href="#">
            <img
              src="images/cart.svg"
              className="filter contrast-0   inline-block w-5  "
            />
            <span className="align-baseline">My cart</span>
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
