const TransactionList = ({ transactions, onDelete }) => (
  <>
    <h3>Movimenti</h3>
    <ul>
      {transactions.map((t) => (
        <li key={t.id}
  className={`transaction ${t.amount < 0 ? 'negative' : 'positive'}`}>
          {t.text} ({t.amount} €)
          <button onClick={() => onDelete(t.id)}>X</button>
        </li>
      ))}
    </ul>
  </>
);

export default TransactionList;
