const StandardSearchBar = () => (
  <div className="relative hidden md:block my-auto">
    <input
      type="form"
      placeholder="Search GwentGear"
      className="  xl:ml-40 xl:w-96 w-48 rounded-md ml-10  border border-gray-500 text-sm text-gray-900 hover:shadow-lg bg-gray-100 hover:bg-gray-50 focus:bg-white outline-none pl-10 py-2 "
    />
    <img
      src="images/magnify.svg"
      className=" absolute inset-0  filter contrast-0  group-hover:contrast-100 inline-block w-6 ml-2 xl:left-40 left-10 top-2"
    />
  </div>
);

export default StandardSearchBar;
