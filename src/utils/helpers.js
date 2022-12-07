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
