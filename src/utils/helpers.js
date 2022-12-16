import Cookies from "js-cookie";

// const Auth = {
//   isAuthorization() {
//     if (Cookies.get("token") || Cookies.get("rt")) return true;
//     return null;
//   },
//   getAccessToken() {
//     return Cookies.get("token");
//   },
//   getRefreshToken() {
//     return Cookies.get("rt");
//   },
//   getUserId() {
//     return Cookies.get("sub");
//   },
//   signOut(navigate) {
//     Cookies.remove("token");
//     Cookies.remove("rt");
//     navigate("/login");
//   },
//   storeUserInfoToCookie(data) {
//     if (!data.access || !data.refresh) return null;
//     const { access, refresh, sub } = data;
//     const accessExpires = new Date(access.expires);
//     const refreshExpires = new Date(refresh.expires);
//     Cookies.set("token", access.token, { expires: accessExpires });
//     Cookies.set("rt", refresh.token, { expires: refreshExpires });
//     Cookies.set("sub", sub, { expires: refreshExpires });
//     return data;
//   },
// };

// export default Auth;
export const getIsAdmin = () => {
  return localStorage.getItem("isAdmin");
};

export const getUser = () => {
  return localStorage.getItem("user");
};
export const getUserId = () => {
  return localStorage.getItem("id");
};

export const getToken = () => {
  return localStorage.getItem("token") || null;
  // return localStorage.getItem("token") || null;
};

export const removeUserSession = (navigate) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("isAdmin");
  localStorage.removeItem("id");
  navigate("/");
};

export const setUserSession = (token, user, isAdmin, id) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", user);
  localStorage.setItem("isAdmin", isAdmin);
  localStorage.setItem("id", id);
};
