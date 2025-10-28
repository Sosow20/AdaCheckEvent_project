import { useEffect, useState } from 'react'
import './App.css'
import { Button } from './components/Button'

function App() {

  const [events, setEvents] = useState([])
  const [showMore, setShowMore] = useState(false)
  // const [loading, setLoading] = useState(false)


  useEffect(() => {
    fetch('https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=20')
      .then((resp) => resp.json())
      .then((data) => setEvents(data.results))
  }, [])

  console.log(events)


  return (
    <>
      <ul>
        {events.map((data, index) =>
          <li key={index}>

            <h1> {data.title} </h1>
            <img src={data.cover_url} alt="" />
            <a href={data.access_link}>{data.access_link_text}</a>
            <p>{data.address_city} {data.adress_name} {data.adresse_street} {data.adresse_zipcode}</p>
            <a href={data.contact_url}>{data.contact_url_text}</a>
            <p>{data.cover_alt}</p>
            <p>{data.cover_credit}</p>
            <p>{data.description}</p>
            <Button text={"See more"} />
            <p>{data.lead_text}</p>
            <p>{data.price_type}</p>
            <p>{data.title}</p>
            <p>{data.title_event}</p>
            <p>{data.transport}</p>
            <p>{data.updated_at}</p>
            <a href={data.url} ></a>
            <p>{data.qfap_tags}</p>
            <p>{data.audience}</p>
            <p>{data.date_end}{data.date_start}</p>
          </li>
        )}
      </ul>
    </>
  )
}

export default App
