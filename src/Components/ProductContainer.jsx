import "./ProductContainer.css";
const ProductContainer = (props) => {
	return (
		<section className="products-section">
			<h1 className="products-title">Nuestros productos:</h1>
			<div className="cards">
				{props.children}
				{props.children}
				{props.children}
				{props.children}
				{props.children}
			</div>
		</section>
	);
};

export { ProductContainer };
