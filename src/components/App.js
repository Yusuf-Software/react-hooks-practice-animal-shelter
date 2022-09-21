import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  let onChangeType = (e) => {
    // console.log(e.target.value)
    setFilters({type: e.target.value});
  }

  let onFindPetsClick = async () => {
    const FETCH_URL = `http://localhost:3001/pets`
    if(filters.type === 'all'){
      let data = await fetch (FETCH_URL);
      let response = await data.json();
      setPets(response);
    }
    else{
      let data = await fetch (FETCH_URL + `?type=${filters.type}`);
      let response = await data.json();
      setPets((oldPets) => (oldPets = [...response]));
      console.log(`response: `,response);
      console.log(`pets state: `,pets);
    }
  }

  let onAdoptPet = (id) => {
    let newPets = [...pets]
    newPets.find((pet) => pet.id === id).isAdopted = true;
    setPets(newPets);
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser onAdoptPet={onAdoptPet} pets={pets}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
