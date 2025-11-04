import { useState, useEffect } from 'react';

export default function FilterDate () {
const [date, setdate] = useState([]);

useEffect(() =>{
        fetch(`https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=6&offset=${currentOffset}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log("Données reçues:", data)

        })
    
    })

    return

(

<div>
          <button onClick={() => setdate("asc")}>Sort Ascending</button>
      <button onClick={() => setdate("desc")}>Sort Descending</button>
    
       <ul>
        {date.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
