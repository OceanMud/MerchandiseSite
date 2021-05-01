import React, { useState, useEffect, useContext } from "react";
import UserContext from "../UserContext";
import { editAccount } from "../account/utils";

const Settings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const [error, setError] = useState("");
  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
    console.log(userInfo);

    return () => {};
  }, []);

  return (
    <div className="flex justify-center  flex-col max-w-2xl  lg:w-auto    mx-auto  mt-10 pl-10 ">
      <div className=" max-w-sm">
        <h1 className=" text-4xl font-thin mb-7">Settings</h1>

        <h3 className=" font-bold tracking-widest text-xl mb-5">
          ACCOUNT PROFILE
        </h3>

        <p className=" text-sm text-gray-700 ">USERNAME</p>
        <input
          type="text"
          value={name}
          className=" px-0 pt-0 font-semibold text-xl w-full border-b border-0 focus:ring-0 border-black"
          onChange={(e) => setName(e.target.value)}
        />

        <p className="text-sm text-gray-700 mt-3">EMAIL ADDRESS</p>
        <input
          type="text"
          value={email}
          className="px-0 pt-0 font-semibold text-xl w-full border-b border-0 focus:ring-0   border-black"
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className="text-sm text-gray-700 mt-10">NEW PASSWORD</p>
        <input
          type="text"
          value={password}
          className="px-0 pt-0 font-semibold text-xl w-full border-0 focus:ring-0   border-b outline-none  border-black"
          onChange={(e) => setPassword(e.target.value)}
        />

        <p className="text-sm text-gray-700 mt-3">OLD PASSWORD</p>
        <input
          type="text"
          value={oldPassword}
          className=" px-0 pt-0 font-semibold text-xl w-full border-0 focus:ring-0  border-b outline-none  border-black"
          onChange={(e) => setOldPassword(e.target.value)}
        />

        <p className="text-xs mt-3">
          If you change your email address, you may need to re-enter your
          billing details next time you place an order.
        </p>

        <div
          className="flex justify-center bg-red-600 mb-4 font-semibold text-sm rounded-md text-white mt-6 px-5 py-2 lg:w-auto hover:bg-red-700 cursor-pointer  "
          onClick={() => {
            const results = async () =>
              await editAccount(
                name,
                email,
                password,
                oldPassword,
                userInfo.token
              );

            results()
              .then((result) => {
                setUserInfo({
                  name: result.name,
                  email: result.email,
                  token: userInfo.token,
                });
                console.log(userInfo);
              })
              .catch((e) => {
                console.log(e);
              });
            setError("Settings Changed Successfully!");
          }}
        >
          SAVE SETTINGS
        </div>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default Settings;
