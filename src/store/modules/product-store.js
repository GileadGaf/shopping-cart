import { productService } from '../../services/product-service';
import { cartService } from '../../services/cart-service';

export default {
    strict: true,
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
                return acc + +product.price;
            }, 0)
        },
        getProducts(state) {
            console.log('from store', state.products);
            console.log('state', state);
            return state.products
        }
    },
    mutations: {
        setCart(state, { cartProducts }) {
            state.cartProducts = cartProducts;
        },
        addToCart({ cartProducts }, { product }) {
            cartProducts.push(product);
        },
        removeFromCart({ cartProducts }, { productId }) {
            const idx = cartProducts.findIndex(product => product._id === productId)
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
        async loadCart({ commit }) {
            const cartProducts = await cartService.getCartProducts();
            commit({ type: 'setCart', cartProducts });

        },
        async removeFromCart({ commit }, { productId }) {
            await cartService.removeFromCart(productId);
            commit({ type: 'removeFromCart', productId })
        },



        async loadProducts({ commit }) {
            const products = await productService.getProducts()
            commit({ type: 'setProducts', products })
        }
    },
}