import { storageService } from './async-storage-service.js';

export const productService = {
    getProducts
}
const gProducts = require('../assets/product.json')
const KEY = "productsDB";


async function getProducts() {
    const products = await storageService.query(KEY);
    console.log(products);
    if (!products.length) {
        storageService.postMany(KEY, gProducts);
        return gProducts;
    }
    return products;
}

function addProduct() {

}

function removeProduct() {

}


function _getEmptyProduct() {
    return {
        title: '',
        price: null,
        img: '',
    }
}