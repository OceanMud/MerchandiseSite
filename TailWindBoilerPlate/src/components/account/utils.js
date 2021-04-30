import axios from "axios";

export const checkSignin = (email, password) => {
  return axios
    .post("http://localhost:3001/users/login", {
      email,
      password,
    })
    .then(function (response) {
      if (response.status === 200) {
        console.log(response);
        console.log(response.data.user.email);
        return {
          name: response.data.user.name,
          email: response.data.user.email,
          jsonToken: response.data.token,
          success: true,
        };
      } else {
        throw new Error("Error");
      }
    })
    .catch(function (error) {
      console.log(error);
      console.log("test");
    });
};
