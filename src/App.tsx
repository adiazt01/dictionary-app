import { useEffect, useState } from "react";
import "./App.css";
import { MdSearch } from "react-icons/md";
import axios from "axios";

function App() {
  const [data, setData] = useState({
    definition: "What word would you like to investigate? :)",
    word: "Welcome",
  });

  const [mean, setMean] = useState("Welcome");
  const [word, setWord] = useState("");
  const options = {
    headers: {
      "X-Api-Key": "p2zQjNrMwT8XZZigj7HZWg==2PJ602CyGSU5EJ0g",
    },
  };

  const searchWord = async () => {
    const url = `https://api.api-ninjas.com/v1/dictionary?word=${word}`;
    const res = (await axios.get(url, options)).data;
    console.log(res);
    setData(res);
  };

  useEffect(() => {
    const dataFirstPoint = data.definition.indexOf(". 3");
    console.log(dataFirstPoint);
    setMean(data.definition.substring(0, dataFirstPoint + 1));
  }, [data]);

  return (
    <main>
      <form onSubmit={(e) => e.preventDefault()} className="form">
        <h1 className="title">Dictionary 📚</h1>
        <input
          type="text"
          onChange={(e) => setWord(e.target.value)}
          className="form-input"
        />
        <button onClick={searchWord} className="form-search">
          <MdSearch className="form-search-icon" />
        </button>
      </form>
      <div className="infoContainer">
        <p className="infoContainer-word">{data && data.word}</p>
        <p className="infoContainer-definition">{mean && mean != "" ? mean:"No se pudo encontrar la palabra"}</p>
      </div>
    </main>
  );
}

export default App;
