import { useState } from "react"

export default function Search({ search, setSearch }) {
    const [mode, setMode] = useState(false)

    const handleOnChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <>
            <div className=" SearchBar bg-[#ffffff]  border-2 border-[#1B3238]  h-20 flex gap-6 overflow-hidden">
                <div className="searchBox p-2 self-baseline-last">
                    <label htmlFor="" className="self-end"> <strong> Rechercher : </strong></label>
                    <input value={search} type="text" placeholder="Entrer texte ..." onChange={handleOnChange} className="bg-[#ffffff] border-2 border-black p-1 rounded-sm" />
                </div>
                <div className="flex items-center-safe">
                    <svg viewBox="0 0 16 16" height="3em" width="3em" className="cursor-pointer">
                        <path fillRule="evenodd" d="M8 12l5 3V3a2 2 0 00-2-2H5a2 2 0 00-2 2v12l5-3zm-4 1.234l4-2.4 4 2.4V3a1 1 0 00-1-1H5a1 1 0 00-1 1v10.234z" clipRule="evenodd" />
                    </svg>
                    <button className="switchMode bg-[#1B3238] static border-4 w-20 border-[#1B3238] h-8 rounded-4xl cursor-pointer" onClick={() => setMode(!mode)}>
                        {mode ?
                            <svg viewBox="0 0 512 512" height="3em" width="3em" className="absolute left-93 top-64 fill-[#38B0EC] duration-500">
                                <path d="M253.125 18.563c-131.53 0-238.375 106.813-238.375 238.343 0 131.53 106.846 238.344 238.375 238.344 131.53 0 238.344-106.815 238.344-238.344 0-131.528-106.816-238.344-238.345-238.344zm-23.938 52.093c40.517 0 77.988 12.904 108.532 34.813-5.597-.624-11.302-.97-17.064-.97-84.157 0-152.375 68.25-152.375 152.406 0 84.157 68.22 152.375 152.376 152.375 5.762 0 11.467-.313 17.063-.936-30.545 21.91-68.016 34.812-108.533 34.812-102.98 0-186.28-83.272-186.28-186.25 0-102.977 83.3-186.25 186.28-186.25z" />
                            </svg> :
                            <svg viewBox="0 0 16 16" height="3em" width="3em" className="absolute left-104 top-64 fill-[#ff9e27] duration-500">
                                <path d="M3.5 8a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" /><path fillRule="evenodd" d="M8.202.28a.25.25 0 00-.404 0l-.91 1.255a.25.25 0 01-.334.067L5.232.79a.25.25 0 00-.374.155l-.36 1.508a.25.25 0 01-.282.19l-1.532-.245a.25.25 0 00-.286.286l.244 1.532a.25.25 0 01-.189.282l-1.509.36a.25.25 0 00-.154.374l.812 1.322a.25.25 0 01-.067.333l-1.256.91a.25.25 0 000 .405l1.256.91a.25.25 0 01.067.334L.79 10.768a.25.25 0 00.154.374l1.51.36a.25.25 0 01.188.282l-.244 1.532a.25.25 0 00.286.286l1.532-.244a.25.25 0 01.282.189l.36 1.508a.25.25 0 00.374.155l1.322-.812a.25.25 0 01.333.067l.91 1.256a.25.25 0 00.405 0l.91-1.256a.25.25 0 01.334-.067l1.322.812a.25.25 0 00.374-.155l.36-1.508a.25.25 0 01.282-.19l1.532.245a.25.25 0 00.286-.286l-.244-1.532a.25.25 0 01.189-.282l1.508-.36a.25.25 0 00.155-.374l-.812-1.322a.25.25 0 01.067-.333l1.256-.91a.25.25 0 000-.405l-1.256-.91a.25.25 0 01-.067-.334l.812-1.322a.25.25 0 00-.155-.374l-1.508-.36a.25.25 0 01-.19-.282l.245-1.532a.25.25 0 00-.286-.286l-1.532.244a.25.25 0 01-.282-.189l-.36-1.508a.25.25 0 00-.374-.155l-1.322.812a.25.25 0 01-.333-.067L8.203.28zM8 2.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z" clipRule="evenodd" /></svg>
                        }

                    </button>
                </div>
            </div>

        </>
    )
}

// #1B3238 dark
// #38609A mid drak
// #38B0EC light

