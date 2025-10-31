import { Button } from './Button'
import parse from 'html-react-parser';
import { CleanDate } from './CleanDate';

export default function Cards ({data}){
    if(!data) return null
    console.log(data)
    
    return (
    <div>
        {data.title && <h1> <strong>{data.title}</strong></h1>}
        {data.cover_url && (<img class="rounded-t-lg" src={data.cover_url}/>)}
        {/* <p>{data.cover_alt}</p> */}
        {data.cover_credit && <p> &copy; {parse(data.cover_credit.replace(/(©|copyright)/gi, ''))}</p>}
        <br/>
        {data.address_name && <p><strong>Lieu:</strong> {data.address_name}</p>}
        {data.address_street && data.address_zipcode && data.address_city && (<p><strong>Adresse:</strong> {data.address_street}, {data.address_zipcode} {data.address_city}</p>)}
        <br/>
        {data.description && (<Button description={data.description}/>)}
        {data.lead_text && <p><strong>Résumé: </strong>{data.lead_text}</p>}
        {data.price_type && <p><strong>Accès:</strong> {data.price_type}</p>}
        {/* si data.price_detail existe tu m'affiche data.price_detail */}
        {/* {data.price_detail && <Clean tags={data.price_detail} />} */}
        {data.price_detail && <p><strong>Tarifs: </strong>{parse(data.price_detail)} </p>}
        {data.transport && <p><strong>Transport:</strong> {parse(data.transport)}</p>}
        <br/>
        <ul>
            {data.access_link && data.access_link_text && (<li><a href={data.access_link}>{data.access_link_text}</a></li>)}
            {data.url && (<li><a href={data.url} > <strong>Lien Ville de Paris </strong></a></li>)}
            {data.contact_url && data.contact_url_text && (<li><a href={data.contact_url}>{data.contact_url_text}</a></li>)}
        </ul>
        <br/>
        {data.qfap_tags && <p><strong> Type d'événement: </strong>{data.qfap_tags}</p>}
        {data.audience && <p><strong> Type de public: </strong>{data.audience}</p>}
        {data.date_starts && <p><strong> Date début événement: </strong>{CleanDate(data.date_start)}</p>}
        {data.date_end && <p><strong> Date début événement: </strong>{CleanDate(data.date_end)}</p>}
        {data.updated_at && <p><strong> Mise à jour de l'article: </strong>{CleanDate(data.updated_at)}</p>} 
    </div>
    )
}