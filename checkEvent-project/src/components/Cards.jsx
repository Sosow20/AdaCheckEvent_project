import parse from 'html-react-parser';

export default function Cards({ data, onOpenModal }) {
    if (!data) return null

    return (
          <div className=" bg-white rounded-lg shadow-md p-2 flex flex-col h-full border-4 border-[#5674d9] border-double">
            <button 
                type="button"
                className=" text-gray-400 hover:text-yellow-400 hover:fill-current transition-colors cursor-pointer flex justify-end"
                aria-label="Bookmark"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 16 16" 
                    className="h-6 w-6 fill-none stroke-current"
                >
                    <path 
                        d="M8 12l5 3V3a2 2 0 00-2-2H5a2 2 0 00-2 2v12l5-3z" 
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            {data.title && <h1 className="text-xs font-bold mb-2"><strong>{data.title}</strong></h1>}
            {data.cover_url && (<img className="w-full h-48 object-cover rounded-md mb-4" src={data.cover_url} />)}
            {data.cover_credit && <p> &copy; {parse(data.cover_credit.replace(/(©|copyright)/gi, ''))}</p>}
            {data.lead_text && <p><strong>Résumé: </strong>{data.lead_text}</p>}

            <button className='border-2 rounded-xl cursor-pointer hover:bg-amber-200 mt-auto' onClick={() => onOpenModal(data)}>
                En savoir Plus
            </button>
        </div>
    )
}
