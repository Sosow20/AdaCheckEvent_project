import { CleanDate } from './CleanDate'
import parse from 'html-react-parser'
import { Button } from './Button'

export function Modal({ data, onClose }) {
    if (!data) return null

    return (
        <div className="modal fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            <div className="overlay w-full h-full bg-[#000000d6] absolute top-0 left-0" onClick={onClose} ></div>
            <div className="modal-content bg-white p-6 rounded-lg z-10 max-w-lg lg:w-full relative overflow-auto max-h-[90vh] md:w-md sm:w-sm">
                <button
                    className="closeModal absolute top-2 right-2 text-xl font-bold cursor-pointer"
                    onClick={onClose}>
                    &#10540;
                </button>
                {data.address_name && <p><strong>Lieu:</strong> {data.address_name}</p>}
                {data.address_street && data.address_zipcode && data.address_city && (
                <p><strong>Adresse:</strong> {data.address_street}, {data.address_zipcode} {data.address_city}</p>
                )}
                <br />
                {data.description && <Button description={data.description}/>}
                {data.price_type && <p><strong>Accès:</strong> {data.price_type}</p>}
                {data.price_detail && <div><strong>Tarifs:</strong> {parse(data.price_detail)}</div>}
                {data.transport && <div><strong>Transport:</strong> {parse(data.transport)}</div>}
                <br />
                <ul>
                    {data.access_link && data.access_link_text && <li><a href={data.access_link}>{data.access_link_text}</a></li>}
                    {data.url && <li><a href={data.url}><strong>Lien Ville de Paris</strong></a></li>}
                    {data.contact_url && data.contact_url_text && <li><a href={data.contact_url}>{data.contact_url_text}</a></li>}
                </ul>
                <br />
                {data.qfap_tags && <p><strong>Type d'événement:</strong> {data.qfap_tags}</p>}
                {data.audience && <p><strong>Type de public:</strong> {data.audience}</p>}
                {data.date_start && <p><strong>Date début événement:</strong> {CleanDate(data.date_start)}</p>}
                {data.date_end && <p><strong>Date fin événement:</strong> {CleanDate(data.date_end)}</p>}
                {data.updated_at && <p><strong>Mise à jour de l'article:</strong> {CleanDate(data.updated_at)}</p>}
            </div>
        </div>
    )
}
