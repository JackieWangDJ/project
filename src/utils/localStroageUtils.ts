// Encapsulate methods for storing and reading data locally
export const SET_TOKEN = (token: string): void => {
  localStorage.setItem("TOKEN", JSON.stringify(token));
};

export const GET_TOKEN = () => {
  try {
    return JSON.parse(localStorage.getItem("TOKEN") || "");
  } catch (e) {
    return null;
  }
};

export const SET_STORAGE = (name: string, val: string): void => {
  localStorage.setItem(name, JSON.stringify(val));
};

export const GET_STORAGE = (name: string): void => {
  return JSON.parse(localStorage.getItem(name) || "");
};
