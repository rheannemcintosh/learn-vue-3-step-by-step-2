<script setup>
    import { useStorage } from "@/composables/useStorage";

    let food = useStorage('food', 'salad');

    let age = useStorage('age');

    let obj = useStorage('obj', { one: 'one'});

    setTimeout(() => {
        obj.value.one = 'CHANGED';
    }, 3000);
</script>

<template>
    <main>
        <p>
            What is your favourite food?
            <input type="text" v-model="food">
        </p>
        <p>
            How old are you?
            <input type="text" v-model="age">
        </p>
    </main>
</template>