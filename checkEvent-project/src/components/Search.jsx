import React from "react"

export default function Search({search, setSearch}) {

    const handleOnChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <>
        <div>
            <label htmlFor=""> <strong> Recherche </strong></label>
            <input class=' w-50 p-2 border-4 border-double' value={search} type="text" placeholder="Entrer texte ..." onChange={handleOnChange}/>
        </div>
        </>

    )
}
