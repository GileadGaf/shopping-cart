import { storageService } from './async-storage-service.js';

export const productService = {
    getProducts
}

const kEY = "productsDb";

function getProducts() {
    return storageService.query(KEY);
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