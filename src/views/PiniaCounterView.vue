<script setup>
    import { usePiniaCounterStore } from "@/stores/PiniaCounterStore";

    let counter = usePiniaCounterStore();
</script>

<template>
  <div>
    <h1>
      Counter View
    </h1>
    <p>
      {{ counter.count }}
    </p>
    <button @click="counter.increment()">Increment ({{ counter.remaining }} Remaining)</button>
  </div>
</template>
