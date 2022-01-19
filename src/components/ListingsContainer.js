import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard"

function ListingsContainer({cards, onRemoveListing}) {

  return (
    <main>
      <ul className="cards">
        {cards.map((card) => {
        return (
          <ListingCard
            key={card.id}
            card={card}
            onRemoveListing={onRemoveListing}
          />
        );
      })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
