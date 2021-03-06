import React, { useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "../UserContext";

const Dashboard = () => {
  const { userInfo } = useContext(UserContext);
  return (
    <div>
      <div>
        <div className=" bg-gray-100 py-6 font-semibold text-xl flex justify-center mx-auto mt-10 ">
          <h1>Hello {userInfo.name}</h1>
        </div>
        <div className="mt-10 text-3xl font-thin flex justify-center">
          My Account
        </div>
      </div>
      <div className="flex justify-center flex-col sm:flex-row">
        <div className="flex flex-col items-center text-lg  space-y-2 justify-center mt-20">
          <div className=" flex flex-col sm:pr-10 sm:pb-0 pb-10 items-center sm:border-r sm:border-b-0 border-b border-gray-300 ">
            <img
              src="/images/icon_account.svg"
              alt="Account Icon"
              className="h-20"
            />
            <h1 className=" py-4 text-lg font-bold">ACCOUNT DETAILS</h1>
            <Link to="/dashboard/settings">Settings</Link>
            <a href="/">Change Password</a>
            <a href="/">Shipping Addresses</a>
            <a href="/">Communication Preferences</a>
          </div>
        </div>
        <div className="flex flex-col items-center text-lg  space-y-2 justify-center mt-6">
          <div className=" flex flex-col sm:pl-10 items-center">
            <img
              src="/images/icon_orders.svg"
              alt="Orders Icon"
              className="h-20  "
            />
            <h1 className=" py-4 text-lg font-bold">ORDERS & RETURNS</h1>
            <a href="/">Order History</a>
            <a href="/">Returns FAQ</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
