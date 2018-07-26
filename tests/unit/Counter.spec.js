import { shallowMount, createLocalVue } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";
import Vuex from "vuex";
import store from "@/store";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Counter.vue", () => {
  const wrapper = shallowMount(Counter, { store, localVue });
    it("button click should increment the count", () => {
        expect(wrapper.vm.count).toBe(0);
        const cookie = wrapper.find("#cookie");
        cookie.trigger("click");
        expect(wrapper.vm.count).toBe(1);
    });
    it("15 clicks on cookie to buy 1 cursor", () => {
        expect(wrapper.vm.count).toBe(1);
        const cookie = wrapper.find("#cookie");
        for(var i=1;i<15;i++) {
            cookie.trigger("click");
        }
        expect(wrapper.vm.count).toBe(15);
        const cursor = wrapper.find("#cursor");
        cursor.trigger("click");
        expect(wrapper.vm.cursor).toBe(1);
        expect(wrapper.vm.count).toBe(0);
    });
});
