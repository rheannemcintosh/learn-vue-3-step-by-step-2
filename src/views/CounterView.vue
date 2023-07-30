<script setup>
    import { counter } from "@/stores/counterStore";
</script>

<template>
  <div>
    <h1>
      Counter View
    </h1>
    <p>
      {{ counter.count }}
    </p>
    <button @click="counter.count++">Increment</button>
  </div>
</template>
