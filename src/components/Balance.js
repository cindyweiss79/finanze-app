const Balance = ({ transactions }) => {
  const total = transactions.reduce((acc, t) => acc + t.amount, 0);
  return (
    <div>
      <h4>Saldo Totale</h4>
      <h1>{total.toFixed(2)} €</h1>
    </div>
  );
};

export default Balance;
