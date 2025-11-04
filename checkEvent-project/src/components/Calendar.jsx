import React, { useState } from "react";

function Calendar() {
  const [date, setDate] = useState("");

  return (
     <div className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow inline-flex items-center gap-2 m-px mt-10 ml-8">

    
      <input
        type="date"
        value={date} 
        onChange={(e) => setDate(e.target.value)}
      />

      {/* {date && <p>Selected date: {date}</p>} */}
    
      <button className= "bg-white hover:bg-gray-100  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow inline-flex gap-1 items-center m-px">Reset
        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em"><path fill="none" stroke="#000" strokeWidth={2} d="M20,8 C18.5974037,5.04031171 15.536972,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 L12,21 C16.9705627,21 21,16.9705627 21,12 M21,3 L21,9 L15,9" /></svg>
</button>




      <button className= "bg-white hover:bg-gray-100  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow inline-flex gap-1 items-center m-px">Trier
<svg stroke="currentColor" fill="none" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
</button>

    </div>


    
  );
}

export default Calendar;
