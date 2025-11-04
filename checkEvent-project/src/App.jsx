import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Search from './components/Search'
import { Footer } from './components/Footer'
import { Modal } from './components/Modal'
import { HeroBanner } from './components/HeroBanner'


export default function App() {
  const [events, setEvents] = useState([])
  const [search, setSearch] = useState("")

  const [selectedEvent, setSelectedEvent] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [offset, setOffset] = useState(0)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    loadEvents(0, true)
  }, [])

  const filterData = events.filter((data) => {

    const title = data.title || "";
    const tags = data.qfap_tags || "";
    return (
      title.toLowerCase().includes(search.toLowerCase()) ||
      tags.toLowerCase().includes(search.toLowerCase())
    )
  })

  const loadEvents = (currentOffset = offset, isInitialLoad = false) => {
  const loadingFunction = isInitialLoad ? setLoading : setLoadingMore
  loadingFunction(true)

    fetch(`https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=8&offset=${currentOffset}`)
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
    <div className='Page bg-repeat bg-[url(./assets/star.svg)]'>
      <HeroBanner/>
      <Search search={search} setSearch={setSearch} />
      <ul className=" Cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-8">
        {filterData.map((data, index) => (
          <li key={`${data.recorded}-${index}`}>
            <Cards data={data}
              onOpenModal={(eventData) => {
              setSelectedEvent(eventData)
              setIsModalOpen(true)
              }} />
          </li>
        ))}
      </ul>

      {hasMore && (
        <div className=" btn_Zone flex justify-center mt-6 p-4">
          <button
            onClick={loadMoreEvents}
            disabled={loadingMore}
            className="bg-[#ff9b29] text-white px-6 py-2 rounded hover:bg-[#c37721] disabled:opacity-50 cursor-pointer flex justify-center"
          >
            {loadingMore ? (
              <>
                <span>Chargement en cours...</span>
                <span>⏳</span>
              </>
            ) : (
              <>
                <span>Charger 8 événements supplémentaires</span>

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


      {isModalOpen && selectedEvent && (
      <Modal data={selectedEvent} onClose={() => setIsModalOpen(false)} />
      )}
      <Footer />
    </div>
  )
}
