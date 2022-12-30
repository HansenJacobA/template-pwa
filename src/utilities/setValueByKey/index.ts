export default function setValueByKey(key: string, value): void {
  localStorage.setItem(key, JSON.stringify(value));
}
