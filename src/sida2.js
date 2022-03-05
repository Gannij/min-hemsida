import React, { useState } from 'react';

function Sida2() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p> What's 9+10 </p>
      <p> Your answer: {count} </p>

      <button onClick={() => setCount(count + 1)}>
       +1
      </button>

      <button onClick={() => setCount(count - 1)}>
       -1
      </button>

      <button onClick={() => {if(count==19){alert('correct')} else{alert('you stuped hahahah')}
      }}>
          submit
      </button>
    </div>
  );
}

export default Sida2