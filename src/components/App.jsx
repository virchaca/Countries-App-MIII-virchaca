//imports dependencias, imagenes, componentes, stylos
// import ls from "../services/localStorage";

import "../styles/App.scss";
import { useEffect, useState } from "react";

function App() {
  //variables
  const [countriesList, setCountriesList] = useState([]);
  const [search, setSearch] = useState("");
  const [continent, setContinent] = useState("All");
  const [newCountry, setNewCountry] = useState({
     flag: "", name: "", capital: [""], continent: [""] });
  

  //funciones

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,flag,continents"
    )
      .then((response) => response.json())
      .then((data) => {
        const cleanCountry = data.map(item  => {
          const cleanObject = {
            flag: item.flag,
            name: item.name.common,
            capital: item.capital,
            continent: item.continents,
          }
          return cleanObject;
        }
        )
        setCountriesList(cleanCountry);
       
      });
  }, []);

  const renderList = () => {
    return countriesList
      .filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
      .filter((item) => {
        if (continent === "All") {
          return countriesList;
        } else {
          return item.continent[0] === continent;
        }
      })

      .map((item, i) => {
        return (
          <li className={`li ${hiddenItems[i] ? "hide" : ""}`} key={i}>
            <button onClick={handleClickRemove}>X</button>
            <p>{item.flag}</p>
            <p>{item.name}</p>
            <p>{item.capital}</p>
            <p>{item.continent}</p>            
          </li>
        );
      });
  };
  const [hiddenItems, setHiddenItems] = useState({});

  const handleClickRemove = (i) => {
    // Copia el estado actual de elementos ocultos
    const updatedHiddenItems = { ...hiddenItems };
    // Cambia el estado de ocultar/mostrar para el elemento con el índice correspondiente
    updatedHiddenItems[i] = !updatedHiddenItems[i];
    setHiddenItems(updatedHiddenItems);
  };
  
  const handleInput = (ev) => {
    setSearch(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleContinent = (ev) => {
    setContinent(ev.target.value);
  };
  const handleInputAdd = (ev) => {
    setNewCountry({ ...newCountry, [ev.target.id]: ev.target.value });
  };

  const handleClick = () => {
    setCountriesList([newCountry,...countriesList]);
    setNewCountry({ flag: "", name: "", capital: "", continent: "" });
  };

  //html
  return (
    <>
      <header>
        <h1>continent Info App</h1>
        <p>
          Explore information about countries, capitals and flags. Add new
          countries and filter through the list!
        </p>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Filters:</legend>
            <label htmlFor="word">By continent:</label>
            <input
              type="text"
              name="word"
              id="word"
              value={search}
              onChange={handleInput}
            />

            <p>By continent:</p>
            <select
              name="continent"
              id="continent"
              value={continent}
              onChange={handleContinent}
            >
              <option value="All">All</option>
              <option value="Africa">Africa</option>
              <option value="North America">North America</option>
              <option value="South America">South America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </fieldset>

          <fieldset>
            <h2> Add Country</h2>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Country Name"
              value={newCountry.name}
              onChange={handleInputAdd}
            />
            <input
              type="text"
              name="capital"
              id="capital"
              placeholder="Capital"
              value={newCountry.capital}
              onChange={handleInputAdd}
            />
            <input
              type="text"
              name="flag"
              id="flag"
              placeholder="Flag Icon"
              value={newCountry.flag}
              onChange={handleInputAdd}
            />
            <input
              type="text"
              name="continent"
              id="continent"
              placeholder="Continent"
              value={newCountry.continent}
              onChange={handleInputAdd}
            />
            <button type="button" onClick={handleClick}>
              Add Country
            </button>
          </fieldset>
        </form>

        <ul className="ul">{renderList()}</ul>
      </main>
    </>
  );
}

export default App;
