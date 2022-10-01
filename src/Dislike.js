import { useState } from 'react';

export function Dislike() {
  const [dislike, setdislike] = useState(0);
  return (
    <div>
      <button className='dislike' onClick={() => { setdislike(dislike + 1); }}>
        👎{dislike}
      </button>
    </div>
  );
}
