<script setup>
    import { usePiniaCounterStore } from "@/stores/PiniaCounterStore";
</script>

<template>
  <div>
    <h1>
      Counter View
    </h1>
    <p>
      {{ counter.count }}
    </p>
    <button @click="counter.increment()">Increment</button>
  </div>
</template>
