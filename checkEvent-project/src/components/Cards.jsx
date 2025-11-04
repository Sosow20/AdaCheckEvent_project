
import parse from 'html-react-parser';
import { useState } from 'react';

export default function Cards({ data, onOpenModal }) {

    const [addFavorite, setAddFavorite] = useState(false)

    if (!data) return null

    return (
        <>
            <div className=" CardsComponent bg-[#ffffffee] rounded-lg shadow-md p-2 flex flex-col h-full gap-2">
                <button
                    type="button"
                    className=" text-gray-400 hover:text-yellow-400 hover:fill-current transition-colors cursor-pointer flex justify-end"
                    aria-label="Bookmark" onClick={() => setAddFavorite(!addFavorite)}
                >
                    {addFavorite ?
                        <svg viewBox="0 0 16 16" height="3em" width="3em">
                            <path fillRule="evenodd" d="M4.5 2a.5.5 0 00-.5.5v11.066l4-2.667 4 2.667V8.5a.5.5 0 011 0v6.934l-5-3.333-5 3.333V2.5A1.5 1.5 0 014.5 1h4a.5.5 0 010 1h-4z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M15.854 2.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708L12.5 4.793l2.646-2.647a.5.5 0 01.708 0z" clipRule="evenodd" />
                        </svg> : <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="3em" width="3em">
                            <path fillRule="evenodd" d="M4.5 2a.5.5 0 00-.5.5v11.066l4-2.667 4 2.667V8.5a.5.5 0 011 0v6.934l-5-3.333-5 3.333V2.5A1.5 1.5 0 014.5 1h4a.5.5 0 010 1h-4zm9-1a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V1.5a.5.5 0 01.5-.5z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M13 3.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z" clipRule="evenodd" />
                        </svg>
                    }

                </button>


                {data.title && <h1 className="text-lg font-bold mb-2"><strong>{data.title}</strong></h1>}
                {data.cover_url && (<img className="w-full h-48 object-cover rounded-md mb-4" src={data.cover_url} />)}
                {data.cover_credit && <p> &copy; {parse(data.cover_credit.replace(/(©|copyright)/gi, ''))}</p>}
                {data.lead_text && <p><strong>Résumé: </strong>{data.lead_text}</p>}
                <div>
                </div>

                <button className='border-2 rounded-xl cursor-pointer hover:bg-yellow-400 mt-auto' onClick={() => onOpenModal(data)}>
                    En savoir Plus
                </button>
            </div>
        </>
    )
}
