import React, { useContext } from "react";
import { SmurfContext } from "../contexts/SmurfContext";

const SmurfCard = () => {
  const { smurfs } = useContext(SmurfContext);
  console.log("list of smurfs", smurfs);
  return (
    <div>
      <h1>Smurfs</h1>
      {smurfs.length > 0
        ? smurfs.map(smurflist => smurflist.map(smurf => <p>{smurf.name}</p>))
        : null}
    </div>
  );
};

export default SmurfCard;
