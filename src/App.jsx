import { useState, useRef } from 'react'
import './App.css'
function App() {
  const [query, setQuery] = useState('')
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedMeal, setSelectedMeal] = useState(null)
  const resultsRef = useRef(null)

  const searchMeals = async () => {
    setLoading(true)
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    const data = await res.json()
    setMeals(data.meals || [])
    setLoading(false)
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
  }
  return (
    <div className="app">
      <div className="hero">
        <h1>Recipe Finder</h1>
        <div className="search-bar">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search recipes..."
          />
          <button onClick={searchMeals}>Search</button>
        </div>
      </div>

      {loading && <p>Loading...</p>}
      {!loading && meals.length === 0 && query && <p>No recipes found.</p>}

      <div className="grid" ref={resultsRef}>
        {meals.map((meal) => (
          <div className="card" key={meal.idMeal} onClick={() => setSelectedMeal(meal)}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strMeal}</p>
          </div>
        ))}
      </div>

      {selectedMeal && (
        <div className="overlay" onClick={() => setSelectedMeal(null)}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedMeal(null)}>Close</button>
            <h2>{selectedMeal.strMeal}</h2>
            <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} />
            <p>{selectedMeal.strInstructions}</p>
          </div>
        </div>
      )}
    </div>
  )
}
export default App