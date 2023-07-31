import { defineStore } from "pinia";

export let usePiniaCounterStore = defineStore('counter', {
    state() {
        return {
            count: 0
        };
    }
})