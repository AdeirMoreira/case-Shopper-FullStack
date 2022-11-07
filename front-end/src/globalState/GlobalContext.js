import { useState } from "react";
import { useInput } from "../hooks/useInput";
import { goToCheckOutPage, goToMainPage, goToShippingPage } from "../routes/Coordinators";
import { GetAllProducts } from "../service/cartPage";
import { RegisterPurchaseRequest, UpdateStockRequest } from "../service/shippingPage";
import { Shopper } from "./Context";

export const GlobalState = (props) => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	const [purchaseData, setPurchaseData] = useState({ totalPurchasePrice: 0, totalPurchaseItens: 0 });
	const [displayShoppingBag, setDisplayShoppingBag] = useState(false);
	const [displayPopUp, setDisplayPopUp] = useState(false);
	const [popUpMessage, setPopUpMessage] = useState([]);
	const [name, handleName, clearInputName] = useInput("");
	const [deliveryDate, handleDate, clearInputDate] = useInput("");
	const [search, handleSearh, clearInputSearch] = useInput("");
	const [searchTerm, setSearchTerm] = useState("");

	const GetAllProductsInStock = () => {
		GetAllProducts(addProductPurchaseProperties);
	};

	const addProductPurchaseProperties = (productArray) => {
		const products = productArray.map((product) => {
			product.qty_purchased = 0;
			product.totalPrice = 0;
			product.inCart = false;
			return product;
		});
		setProducts(products);
	};

	const checkQuantityPurchased = (product) => {
		product.qty_purchased + 1 > product.qty_stock
			? buildPopUpMessage(
					"Limite de estoque.",
					`A Quantidade desse produto que você deseja comprar excede a quantidade disponivel em estoque.`
			  )
			: addToCart(product);
	};

	const buildPopUpMessage = (title, message) => {
		const popUpContent = [title, message];
		setPopUpMessage(popUpContent);
		setDisplayPopUp(true);
	};

	const addToCart = (product) => {
		const newProduct = {
			...product,
			qty_purchased: product.qty_purchased + 1,
			totalPrice: (product.qty_purchased + 1) * product.price,
			inCart: true,
		};
		const productInCart = cart.find((prod) => prod.id === product.id);
		let newCart = cart;
		if (productInCart) {
			newCart = cart.map((prod) => (product.id === prod.id ? newProduct : prod));
			setCart(newCart);
		} else {
			newCart.push(newProduct);
			setCart(newCart);
		}
		const newProducts = products.map((prod) => (prod.id === product.id ? newProduct : prod));
		setProducts(newProducts);
		calculePurchaseData(newCart);
	};

	const removeFromCart = (product) => {
		const newProduct = {
			...product,
			qty_purchased: product.qty_purchased - 1,
			totalPrice: (product.qty_purchased - 1) * product.price,
			inCart: product.qty_purchased - 1 === 0 ? false : true,
		};
		const newCart = cart
			.map((prod) => (prod.id === product.id ? newProduct : prod))
			.filter((prod) => prod.qty_purchased > 0);
		setCart(newCart);
		const newProducts = products.map((prod) => (prod.id === product.id ? newProduct : prod));
		setProducts(newProducts);
		calculePurchaseData(newCart);
	};

	const removeFromCartDirectly = (product) => {
		const newProduct = {
			...product,
			qty_purchased: 0,
			totalPrice: 0,
			inCart: false,
		};
		const newProducts = products.map((prod) => (prod.id === product.id ? newProduct : prod));
		const newCart = cart.filter((prod) => prod.id !== product.id);
		setProducts(newProducts);
		setCart(newCart);
		calculePurchaseData(newCart);
	};

	const calculePurchaseData = (cart) => {
		const totalPurchasePrice = cart.reduce((total, product) => total + product.totalPrice, 0);
		const totalPurchaseItens = cart.reduce((total, product) => total + product.qty_purchased, 0);
		setPurchaseData({ totalPurchasePrice, totalPurchaseItens });
	};

	const openCloseShoppingBag = () => setDisplayShoppingBag(displayShoppingBag ? false : true);

	const searchProduct = (term, navigate) => {
		goToMainPage(navigate);
		setSearchTerm(term);
	};
	const clearSearchTerm = () => {
		setSearchTerm("");
		clearInputSearch();
	};

	const checkCartIsEmpety = (navigate) => {
		cart.length > 0
			? goToCheckOutPage(navigate)
			: buildPopUpMessage("Carrinho Vazio.", "Adicione um item ao carrinho.");
	};

	const checkNameAndDeliveryDate = (navigate) => {
		name && deliveryDate && checkDeliveryDataHasPassed(deliveryDate)
			? goToShippingPage(navigate)
			: buildPopUpMessage(
					"Nome e/ou Data de Entrega Inválidos",
					"Por favor digite seu nome e uma data de entrega para seu pedido. A data de entrega deve ser uma da futura."
			  );
	};

	const checkDeliveryDataHasPassed = (deliveryData) => {
		return new Date(deliveryData).getTime() >= new Date(new Date().toISOString().slice(0, 10)).getTime();
	};

	const finalizePurchase = () => {
		registerPurchase();
		updateStock();
		setCart([]);
		setPurchaseData({ totalPurchasePrice: 0, totalPurchaseItens: 0 });
		clearInputName();
		clearInputDate();
	};

	const registerPurchase = () => {
		const purchase = {
			clientName: name,
			totalPrice: purchaseData.totalPurchasePrice,
			productsPurchased: cart,
			deliveryDate,
		};
		RegisterPurchaseRequest(purchase);
	};

	const updateStock = () => {
		const productsPurchased = {
			productsPurchased: cart.map((product) => {
				return {
					id: product.id,
					qty_purchased: product.qty_purchased,
				};
			}),
		};
		UpdateStockRequest(productsPurchased);
	};

	const params = {
		products,
		cart,
		GetAllProductsInStock,
		addToCart,
		checkQuantityPurchased,
		removeFromCart,
		removeFromCartDirectly,
		purchaseData,
		displayShoppingBag,
		openCloseShoppingBag,
		name,
		handleName,
		clearInputName,
		deliveryDate,
		handleDate,
		clearInputDate,
		search,
		handleSearh,
		clearInputSearch,
		searchTerm,
		searchProduct,
		clearSearchTerm,
		displayPopUp,
		setDisplayPopUp,
		popUpMessage,
		checkCartIsEmpety,
		checkNameAndDeliveryDate,
		finalizePurchase,
	};

	return <Shopper.Provider value={params}>{props.children}</Shopper.Provider>;
};
