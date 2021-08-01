import Vue from 'vue'
import Vuex from 'vuex'
import productStore from './modules/product-store.js';

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {},
    mutations: {},
    actions: {},
    modules: { productStore }
})