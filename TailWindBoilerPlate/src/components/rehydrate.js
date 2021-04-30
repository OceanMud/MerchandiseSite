const rehydrate = () => {
  const data = JSON.parse(sessionStorage.getItem("token"));

  if (data === null) {
    console.log("data", data);
    return "";
  } else {
    console.log("data", data);
    return data;
  }
};

const setStorage = (data) => {
  sessionStorage.setItem("token", JSON.stringify(data));
};

export { setStorage, rehydrate };
