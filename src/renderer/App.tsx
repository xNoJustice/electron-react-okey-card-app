import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface Cards {
  [key: string]: boolean;
}

function Okey() {
  const [cards, setCards] = useState<Cards>({});

  useEffect(() => {
    const list: Cards = {};
    for (let i = 1; i < 25; i += 1) {
      list[i] = true;
    }
    setCards(list);
  }, []);

  const updateCards = (card: string) => {
    const newCards = { ...cards };
    newCards[card] = !newCards[card];
    setCards(newCards);
  };

  const reset = () => {
    const list: Cards = {};
    for (let i = 1; i < 25; i += 1) {
      list[i] = true;
    }
    setCards(list);
  };

  const returnColor = (card: string) => {
    const num = parseInt(card, 10);
    if (num > 16 && cards[card]) {
      return '#01528a';
    }
    if (num > 8 && cards[card]) {
      return '#b59c09';
    }
    if (num > 0 && cards[card]) {
      return '#c00904';
    }
    return '#1f1e1a';
  };

  const returnNumber = (card: string) => {
    const num = parseInt(card, 10);

    if (num / 8 === 1) {
      return '8';
    }
    if (num / 16 === 1) {
      return '8';
    }
    if (num / 24 === 1) {
      return '8';
    }
    return num % 8;
  };

  return (
    <div className="flex flex-col">
      <div className="mx-auto">
        <h1 className="text-indigo-200 mx-auto text-2xl w-32">Okey Card</h1>
        <div className="text-white text-lg mb-4">
          Note: Click again if you want to reactivate the number.
        </div>
      </div>
      <div className="grid grid-cols-8 gap-3">
        {Object.keys(cards).length > 0 &&
          Object.keys(cards).map((card) => (
            <button
              style={{
                background: returnColor(card),
              }}
              onClick={() => updateCards(card)}
              onKeyDown={() => updateCards(card)}
              type="button"
              className="bg-opacity-5 p-6 sm:p-8 lg:p-10 rounded-lg"
              key={card}
            >
              <div>
                <div>
                  <div
                    style={{
                      color: cards[card] ? '#fff' : '#4d4d4d',
                    }}
                    className="text-center text-white text-xl lg:text-4xl"
                  >
                    {returnNumber(card)}
                  </div>
                </div>
              </div>
            </button>
          ))}
      </div>
      <button
        type="button"
        onClick={() => reset()}
        className="py-2 px-4 mt-4 w-32 mx-auto bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        Reset
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Okey />} />
      </Routes>
    </Router>
  );
}
