import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Search from './components/Search'


export default function App() {

  const [events, setEvents] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=100')
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        setEvents(data.results)
      })
      .catch((error) => {
      console.error("Erreur lors du fetch :", error)})
  }, [])

  console.log(events)

   const filterData = events.filter((data) => 
    data.title.toLowerCase().includes(search.toLowerCase()))

  const dataList = filterData.map((data, index) =>
          <li key={index}>
            <Cards
            data={data}
            />
          </li>
        ) 

  return (
    <>
    <Search search={search} setSearch={setSearch}/>
      <ul>
      {dataList}
      </ul>
    </>
  )
}
