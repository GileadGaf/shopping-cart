import { productService } from '../../services/product-service';

export default {
    state: {
        products: [],
        cartProducts: []
    },
    getters: {
        cartProducts({ cartProducts }) {
            return cartProducts;
        },
        cartSize({ cartProducts }) {
            return cartProducts.length;
        },
        cartTotal({ cartProducts }) {
            return cartProducts.reduce((acc, product) => {
                return acc + product.price;
            }, 0)
        },
        getProducts(state) {
            console.log('from store', state.products);
            console.log('state', state);
            return state.products
        }
    },
    mutations: {
        addToCart({ cartProducts }, { product }) {
            cartProducts.push(product);
        },
        removeFromCart({ cartProducts }, { productId }) {
            const idx = state.cartProducts.findIndex(product => cproduct_id === productId)
            cartProducts.splice(idx, 1)
        },
        clearCart({ cartProducts }) {
            cartProducts = [];
        },
        setProducts(state, { products }) {
            console.log('mutations', products);
            state.products = products
        }

    },
    actions: {
        async loadProducts({ commit }) {
            const products = await productService.getProducts()
            commit({ type: 'setProducts', products })
        }
    },
}