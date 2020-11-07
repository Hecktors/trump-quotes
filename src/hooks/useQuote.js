import { useEffect, useState } from 'react'
import fetchQuote from '../services/fetchQuote'
import { getLocalStorage, setLocalStorage } from '../services/localStorage'

export default function useQuote() {
  const [quote, setQuote] = useState({})
  const [savedQuotes, setSavedQuotes] = useState([])

  useEffect(() => {
    setSavedQuotes(getLocalStorage() ?? [])
    getQuote()
  }, [])

  useEffect(() => {
    setLocalStorage(savedQuotes)
  }, [savedQuotes])

  function getQuote() {
    fetchQuote().then((fetchedQuote) => {
      setQuote({
        id: fetchedQuote.quote_id,
        text: fetchedQuote.value,
        date: fetchedQuote.appeared_at,
      })
    })
  }

  function saveQuote() {
    !savedQuotes.some((savedQuote) => savedQuote.id === quote.id) &&
      setSavedQuotes([...savedQuotes, quote])
  }

  function removeQuote(id) {
    setSavedQuotes(savedQuotes.filter((savedQuote) => savedQuote.id !== id))
  }

  return [quote, savedQuotes, getQuote, saveQuote, removeQuote]
}
