import { storageService } from './async-storage-service.js';

export const cartService = {
    getCartProducts,
    addToCart,
    removeFromCart
}

const gCartProducts = [{
        "_id": "61067bc3dc3665f674dcc5a6",
        "title": "T-shirt",
        "price": "12",
        "img": "https://picsum.photos/200"
    },
    {
        "_id": "61067bc3708aaa831cbbb5df",
        "title": "Jeans",
        "price": "44",
        "img": "https://picsum.photos/200"
    },
    {
        "_id": "61067bc376c75e7b1d8bb731",
        "title": "Coat",
        "price": "33",
        "img": "https://picsum.photos/200"
    }
]

const KEY = "cartDb";

async function getCartProducts() {
    const cartProducts = await storageService.query(KEY);
    if (!cartProducts.length) {
        storageService.postMany(KEY, gCartProducts);
        return gCartProducts;
    }
    return cartProducts;
}

function addToCart(product) {
    return storageService.post(KEY, product);
}

function removeFromCart(productId) {
    return storageService.remove(KEY, productId);
}