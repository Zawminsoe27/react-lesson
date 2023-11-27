import React, { useReducer, useState } from "react";
import "./Product.css";

const products = [
	{
		emoji: "🍦",
		name: "iceCream",
		price: 5,
	},
	{
		emoji: "🍩",
		name: "Donuts",
		price: 2.5,
	},
	{
		emoji: "🍉",
		name: "Water melon",
		price: 4,
	},
];
const currencyOptions = {
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
};
function cartReducer(state, action) {
	switch (action.type) {
		case "add":
			return [...state, action.product];
		case "remove":
			const productIndex = state.findIndex(
				(item) => item.name === action.product.name
			);
			if (productIndex < 0) {
				return state;
			}
			const updatedCart = [
				...state.slice(0, productIndex),
				...state.slice(productIndex + 1),
			];
			return updatedCart;
		default:
			return state;
	}
}

function totalReducer(state, action) {
	if (action.type === "add") {
		return state + action.price;
	} else {
		return state - action.price;
	}
}
function getTotal(cart) {
	const total = cart.reduce((totalCost, item) => totalCost + item.price, 0);
	return total.toLocaleString(undefined, currencyOptions);
}
function Product() {
	const [cart, setCart] = useReducer(cartReducer, []);
	const [total, setTotal] = useReducer(totalReducer, 0);

	function add(product) {
		setCart({ product, type: "add" });
	}
	function remove(product) {
		setCart({ product, type: "remove" });
	}
	return (
		<div className="wrapper">
			<div>Shopping Cart: {cart.length} total items.</div>
			<div>Total : {getTotal(cart)}</div>

			<div className="itemListContainer">
				{products.map((product) => (
					<div key={product.name} className="productItemContainer">
						<div className="product">
							<span role="img" aria-label={product.name}>
								{product.emoji}
							</span>
						</div>
						<button
							className="btn add"
							onClick={() => add(product)}>
							Add
						</button>
						<button
							className="btn remove"
							onClick={() => remove(product)}>
							Remove
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
export default Product;
