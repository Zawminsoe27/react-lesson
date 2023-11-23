import React, { Component } from "react";
import "./Product.css";

const products = [
	{
		emoji: "🍦",
		name: "ice-cream",
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

class Product extends Component {
	state = {
		cart: [],
	};

	add = (product) => {
		this.setState((state) => ({
			cart: [...state.cart, product],
		}));
	};

	currencyOptions = {
		minimumFractionDigits: 2,
		maximunFractionDigits: 2,
	};
	getTotal = () => {
		const total = this.state.cart.reduce(
			(totalConst, item) => totalConst + item.price,
			0
		);
		return total.toLocaleString(undefined, this.currencyOptions);
	};
	remove = (product) => {
		this.setState((state) => {
			const cart = [...state.cart];
			const productIndex = cart.findIndex((p) => p.name == product.name);
			if (productIndex < 0) {
				return;
			}
			cart.splice(productIndex, 1);
			return {
				cart
			};
		});
	};
	render() {
		return (
			<div className="wrapper">
				<div>Shopping Cart: {this.state.cart.length} total items</div>
				<div>Total:{this.getTotal()}</div>
				<div className="itemListContainer">
					{products.map((product) => {
						return (
							<div
								key={product.name}
								className="productItemContainer">
								<div className="product">
									<span role="img" aria-label={product.name}>
										{product.emoji}
									</span>
								</div>
								<button
									className="btn add"
									onClick={() => this.add(product)}>
									Add
								</button>
								<button
									className="btn remove"
									onClick={() => this.remove(product)}>
									Remove
								</button>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
export default Product;
