export const retrieveFromLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  if (value) {
    const initialValue = JSON.parse(value);
    return initialValue;
  }
  return "";
};

export const stringToBool = (input: string) => {
  if (input === "") return false;

  return input.toString().toLowerCase() == "true" ? true : false;
};
