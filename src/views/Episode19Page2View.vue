<script setup>
    import { useFlash } from "@/composables/useFlash";

    let { flash } = useFlash();
</script>

<template>
  <main>
    <TheWelcome />

    <p>
      <button @click="flash('It Works!')">Click Me</button>
    </p>
  </main>
</template>
