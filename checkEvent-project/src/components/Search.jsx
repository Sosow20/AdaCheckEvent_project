export default function Search({ search, setSearch }) {

    const handleOnChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <>
            <div className="bg-white flex justify-center gap-2 border-b-5  border-double">
                <div className="searchBox p-2">
                    <label htmlFor=""> <strong> Rechercher </strong></label>
                    <input value={search} type="text" placeholder="Entrer texte ..." onChange={handleOnChange} className="bg-[#ffffff] border-2 border-black p-1" />
                </div>
            </div>
        </>
    )
}
