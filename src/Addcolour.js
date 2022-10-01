import { useState } from 'react';
import { Colorbox } from './Colorbox';

export function Addcolour() {

  // const color="yellow";
  const [color, setColor] = useState("blue");
  const styles = {
    backgroundColor: color,
    fontSize: "30px",
  };
  // const colorlist=["orange", "green", "red", "blue", "violet"]
  const [colorlist, setcolorlist] = useState(["orange", 'green', "pink", "purple"]);
  return (
    <div>
      <div>
        <input type="text" style={styles} onChange={(event) => setColor(event.target.value)} placeholder="Type color" value={color}>
        </input>
        <button onClick={() => setcolorlist([...colorlist, color])}>Add color</button>
      </div>
      {colorlist.map((clr) => (<Colorbox color={clr} />

      ))}


    </div>
  );
}
