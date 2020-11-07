export function setLocalStorage(quotes) {
  localStorage.setItem('quotes', JSON.stringify(quotes))
}

export function getLocalStorage() {
  return JSON.parse(localStorage.getItem('quotes'))
}
