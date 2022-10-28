import './Product.css';
import { BuyBtn } from './BuyBtn';
import { Discount } from './Discount';
import { Heart } from './Heart';

const Product = ({ discount, name, oldPrice, newPrice }) => {
	return (
		<div className='product'>
			<Heart />
			<Discount discount={discount} />
			<img
				className='product-img'
				src='https://picsum.photos/182'
				alt='random-img'
			/>
			<h2 className='product-name'>{name}</h2>
			<div className='product-details'>
				<p className='product-oldPrice'> ${oldPrice}</p>
				<p className='product-newPrice'>${newPrice}</p>
				<BuyBtn name={name} newPrice={newPrice} />
			</div>
		</div>
	);
};

export { Product };
