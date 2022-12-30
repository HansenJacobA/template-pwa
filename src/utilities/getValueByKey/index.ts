// This function returns the value stored at the given key in local storage
export default function getValueByKey(key: string) {
  const storedValue = JSON.parse(localStorage.getItem(key));
  return storedValue;
}
