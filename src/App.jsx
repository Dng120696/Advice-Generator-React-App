import { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState({});
  const { id, advice: adviceInfo } = advice;

  const adviceGenerate = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data.slip);
    } catch (error) {
      console.log(`Advice not found:${error.message}`);
    }
  };

  useEffect(() => {
    adviceGenerate();
  }, []);

  return (
    <main className="main__container">
      <p className="advice__num">Advice #{id}</p>
      <p className="advice__info">{adviceInfo}</p>
      <button className="btn__dice" onClick={adviceGenerate}>
        <img src="./images/icon-dice.svg" alt="dice" />
      </button>
    </main>
  );
}
