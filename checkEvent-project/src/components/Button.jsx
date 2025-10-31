import parse from 'html-react-parser';
import { useState } from 'react';

export function Button({ description }) {
  const [isOpen, setIsOpen] = useState(false);
  if (!description) return null;


  const preview = description.length > 150 ? description.substring(0, 150) + "..." : description;

  return (
    <div className="descrpBox">
      <div>{isOpen ? parse(description) : parse(preview)}</div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "See less" : "See more"}
      </button>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 7da5e2d1387f923539c99e3a60638729a2f36929
