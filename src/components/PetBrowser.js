import React from "react";

import Pet from "./Pet";

function PetBrowser(props) {
  return (
  <div className="ui cards">
    {props.pets.map(pet => <Pet pet={pet} onAdoptPet={props.onAdoptPet} key={pet.id}/>)}
  </div>
    )
}

export default PetBrowser;
