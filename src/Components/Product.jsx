import "./Product.css";
import { BuyBtn } from "./BuyBtn";
const Product = () => {
	return (
		<div className="product">
			<img
				className="product-img"
				src="https://picsum.photos/180"
				alt="random-img"
			/>
			<h2 className="product-name">Vaso</h2>
			<div className="product-details">
				<p className="product-oldPrice">500</p>
				<p className="product-newPrice">320</p>
				<BuyBtn />
			</div>
		</div>
	);
};

export { Product };
