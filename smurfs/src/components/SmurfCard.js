import React, { useContext } from "react";
import { SmurfContext } from "../contexts/SmurfContext";
import axios from "axios";

function SmurfCard() {
  const { smurfs } = useContext(SmurfContext);
  const deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => console.log("delete", res))
      .catch(function(error) {
        console.log(error);
      });
    window.location.href = window.location.href;
  };
  console.log("list of smurfs", smurfs);
  return (
    <div>
      <h1>Smurfs</h1>
      {smurfs.length > 0
        ? smurfs.map(smurflist =>
            smurflist.map(smurf => (
              <>
                <p>{smurf.name}</p>
                <button onClick={() => deleteSmurf(smurf.id)}>x</button>
              </>
            ))
          )
        : null}
    </div>
  );
}

export default SmurfCard;
