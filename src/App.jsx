import { useState } from 'react'

function App() {
  const [query, setQuery] = useState('')
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)

  const searchMeals = async () => {
    setLoading(true)
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    const data = await res.json()
    setMeals(data.meals || [])
    setLoading(false)
  }
  return (
    <div>
      <h1>Recipe Finder</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes..."
      />
      <button onClick={searchMeals}>Search</button>

      {loading && <p>Loading...</p>}

      <div>
        {meals.map((meal) => (
          <div key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} width="150" />
            <p>{meal.strMeal}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default App