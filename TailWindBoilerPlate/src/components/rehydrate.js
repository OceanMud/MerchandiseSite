import { getProfile } from "./account/utils";

const rehydrate = async () => {
  const token = await JSON.parse(sessionStorage.getItem("token"));

  if (token === null) {
    return "";
  }

  const results = async () => await getProfile(token);

  return results()
    .then((result) => {
      return {
        name: result.name,
        email: result.email,
        token,
      };
    })
    .catch((e) => {
      console.log(e);
      return;
    });
};

const setStorage = (data) => {
  if (!data) {
    sessionStorage.clear();
    return;
  }

  sessionStorage.setItem("token", JSON.stringify(data));
};

export { setStorage, rehydrate };
