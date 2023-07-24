<script setup>
    import { useFlash } from "@/composables/useFlash";

    let { flash } = useFlash();
</script>

<template>
  <main>
    <TheWelcome />

    <p>
      <button @click="flash('Oops', 'Something went wrong!', 'error')">Click Me</button>
    </p>
  </main>
</template>
