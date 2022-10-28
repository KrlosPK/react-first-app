import './BuyBtn.css';
const BuyBtn = ({ name, newPrice }) => {
	const comprar = () => {
		alert(`Has comprado ${name} por ${newPrice}$`);
	};

	return <button onClick={comprar}>Comprar</button>;
};

export { BuyBtn };
