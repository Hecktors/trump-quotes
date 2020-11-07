import useQuote from './hooks/useQuote'
import SavedQuote from './SavedQuote'

const { default: Button } = require('./Button')
const { default: Quote } = require('./Quote')

function App() {
  const [quote, savedQuotes, getQuote, saveQuote, removeQuote] = useQuote()
  return (
    <div className="App">
      <Quote date={quote.date} text={quote.text} />
      <div className="btn-container">
        <Button text="New Quote" handleClick={getQuote} />
        <Button text="Save Quote" handleClick={saveQuote} />
      </div>
      <div className="quotes-container">
        {savedQuotes.map((savedQuote) => (
          <SavedQuote
            key={savedQuote.id}
            date={savedQuote.date}
            text={savedQuote.text}
            handleClick={() => removeQuote(savedQuote.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default App

// structure: quote, button-container, savedQuotes
// fetch
// hooks: quote, savedQuotes, getQuote, saveQuote, deleteQuote
// localStorage
// styling
