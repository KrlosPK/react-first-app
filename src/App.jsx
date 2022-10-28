import { ProductContainer } from './Components/ProductContainer';
import { Product } from './Components/Product';
import data from './products.json';

const App = () => {
	return (
		<ProductContainer>
			{data.map((item) => (
				<Product
					id={item.id}
					name={item.name}
					discount={item.discount}
					oldPrice={item.price}
					newPrice={item.price - (item.price * item.discount) / 100}
				/>
			))}
		</ProductContainer>
	);
};

export { App };
