import { useState } from 'react';

export function Counter() {

  const [like, setLike] = useState(0);
  return (
    <div>
      <button onClick={() => {
        setLike(like + 1);
      }}>

        👍{like}

      </button>


    </div>
  );
}
