import { shallowMount, createLocalVue } from "@vue/test-utils";
import {store} from "../../src/store.js"
import Counter from "@/components/Counter.vue";
import Vuex from 'vuex';
const localVue = createLocalVue()

localVue.use(Vuex)
describe("Counter.vue", () => {
    let getters
    let store
    const wrapper = shallowMount(Counter);

});
