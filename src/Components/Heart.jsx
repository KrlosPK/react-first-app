import './Heart.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';

const Heart = () => {
	const [like, setLike] = useState(true);

	const handleClick = () => {
		like ? setLike(false) : setLike(true);
	};

	return (
		<div onClick={handleClick}>
			{like ? (
				<AiOutlineHeart className='heart' />
			) : (
				<AiFillHeart className='heart' />
			)}
		</div>
	);
};

export { Heart };
