import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Search from './components/Search'

export default function App() {
  const [events, setEvents] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [offset, setOffset] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    loadEvents(0, true)
  }, [])

  const filterData = events.filter((data) =>
    data.title.toLowerCase().includes(search.toLowerCase()))

  const loadEvents = (currentOffset = offset, isInitialLoad = false) => {
    const loadingFunction = isInitialLoad ? setLoading : setLoadingMore
    loadingFunction(true)

    fetch(`https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=6&offset=${currentOffset}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Données reçues:", data)

        if (data.results && data.results.length > 0) {
          if (isInitialLoad) {
            setEvents(data.results)
          } else {
            setEvents(prev => [...prev, ...data.results])
          }
          setOffset(currentOffset + 6)

          // Vérifier s'il reste des données à charger
          if (data.results.length < 6) {
            setHasMore(false)
          }
        } else {
          setHasMore(false)
        }

        loadingFunction(false)
      })
      .catch((error) => {
        console.error("Erreur:", error)
        loadingFunction(false)
      })
  }

  const loadMoreEvents = () => {
    loadEvents(offset, false)
  }

  if (loading) return <div className="App">Chargement des événements...</div>

  return (
    <div className="App">
      <Search search={search} setSearch={setSearch} />

      <ul>
        {filterData.map((data, index) => (
          <li key={data.id || index}>
            <Cards data={data} />
          </li>
        ))}
      </ul>

      {hasMore && (
        <div>
          <button
            onClick={loadMoreEvents}
            disabled={loadingMore}
          >
            {loadingMore ? (
              <>
                <span>Chargement en cours...</span>
                <span>⏳</span>
              </>
            ) : (
              <>
                <span>Charger 20 événements supplémentaires</span>

              </>
            )}
          </button>
        </div>
      )}

      {!hasMore && events.length > 0 && (
        <div>
          <p> Tous les événements ont été chargés !</p>
          <p>Vous avez chargé {events.length} événements au total.</p>
        </div>
      )}

      {!loading && events.length === 0 && (
        <div>
          <p>Aucun événement trouvé</p>
        </div>
      )}
    </div>
  )
}
