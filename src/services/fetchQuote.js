export default function fetchQuote() {
  return fetch('https://api.tronalddump.io/random/quote')
    .then((data) => data.json())
    .catch((error) => console.error(error))
}
