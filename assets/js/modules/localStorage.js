export default function initLocalStorage() {
  const set = (array) => {
    localStorage.setItem('coords', JSON.stringify(array));
  };

  const get = () => {
    const data = localStorage.getItem('coords');
    return data ? JSON.parse(data) : null;
  };

  return { set, get };
}