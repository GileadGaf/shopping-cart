import { productService } from '../../services/product-service';

export default {
  state: {
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
    }

  },
  actions: {},
  modules: {}
}