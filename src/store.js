import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        countTotal: 1000000,
        cookiesPerSecond : 0,
        cursor : 0,
        cursorPricing : 15,
        grandma :0,
        grandmaPricing : 100,
        farm :0,
        farmPricing : 1100,
    },
    mutations: {
        "INCREMENT_COUNT": (state)=> {
            state.countTotal++
        },
        "REMOVE_FROM_COUNT": (state, value)=> {
            state.countTotal = state.countTotal - value
        },
        "ADD_COOKIES_PER_SECOND_TO_COUNT": (state)=> {
            state.countTotal = state.countTotal + state.cookiesPerSecond
        },
        "SET_CURSOR": (state)=> {
            state.cursor++
            state.cursorPricing = state.cursorPricing + (state.cursorPricing*0.15)
            state.cookiesPerSecond = state.cookiesPerSecond+0.1
        },
        "SET_GRANDMA": (state)=> {
            state.grandma++
            state.grandmaPricing = state.grandmaPricing + (state.grandmaPricing*0.10)
            state.cookiesPerSecond++
        },
        "SET_FARM": (state)=> {
            state.farm++
            state.farmPricing = state.farmPricing+ (state.farmPricing*0.15)
            state.cookiesPerSecond = state.cookiesPerSecond+8
        },
    },
    actions: {
        incrementCount({ commit }) {
            commit("INCREMENT_COUNT");
        },
        removeFromCount({ commit }, cursorPricing) {
            commit("REMOVE_FROM_COUNT", cursorPricing);
        },
        addCookiesPerSecondToCount({ commit }) {
            commit("ADD_COOKIES_PER_SECOND_TO_COUNT");
        },
        incrementCursor({ commit }) {
            commit("SET_CURSOR");
        },
        incrementGrandma({ commit }) {
            commit("SET_GRANDMA");
        },
        incrementFarm({ commit }) {
            commit("SET_FARM");
        }
    },
    getters: {
        count(state) {
            return Number((state.countTotal).toFixed(0));
        },
        cookiesPerSecond(state) {
            return Number((state.cookiesPerSecond).toFixed(1));
        },
        cursor(state) {
            return state.cursor;
        },
        cursorPricing(state) {
            return Number((state.cursorPricing).toFixed(0));
        },
        grandma(state) {
            return state.grandma;
        },
        grandmaPricing(state) {
            return Number((state.grandmaPricing).toFixed(0));
        },
        farm(state) {
            return state.farm;
        },
        farmPricing(state) {
            return Number((state.farmPricing).toFixed(0));
        }
    }
});
