import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [cards, setCards] = useState([])
  const [search, setSearch] = useState('')
 

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then(setCards)
  })

  const visibleCards = cards.filter((card) =>
    card.description.toLowerCase().includes(search.toLowerCase())
  );

  function handleRemoveListing(id) {
    const newCards = cards.filter((card) => card.id !== id);
    setCards(newCards)
  }

  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer
        cards={visibleCards}
        onRemoveListing={handleRemoveListing}
      />
    </div>
  );
}

export default App;
