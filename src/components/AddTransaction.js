import { useState } from "react";

const AddTransaction = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;
    const newTransaction = {
      id: Date.now(),
      text,
      amount: parseFloat(amount)
    };
    onAdd(newTransaction);
    setText("");
    setAmount("");
  };

  return (
    <>
      <h3>Aggiungi Transazione</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Descrizione</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div>
          <label>Importo (€)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit">Aggiungi</button>
      </form>
    </>
  );
};

export default AddTransaction;
