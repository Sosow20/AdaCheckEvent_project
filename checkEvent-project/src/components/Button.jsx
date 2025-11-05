import parse from 'html-react-parser';
import { useState } from 'react';

export function Button({ description}) {
  const [isOpen, setIsOpen] = useState(false);
  if (!description) return null;


  const preview = description.length > 150 ? description.substring(0, 150) + "..." : description;

 


  return (
    <div className="descrpBox bg-[#ff9e27b0] p-2 flex flex-col rounded-lg">
      <h1 className='place-self-center'> <strong>Description</strong></h1>
      <div>{isOpen ? parse(description) : parse(preview)}</div>
      <button className='cursor-pointer p-2 rounded-sm bg-[#1B3238] text-white' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "See less" : "See more"}
      </button>
    </div>
  );
}
