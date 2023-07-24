<script>
    import flash from "@/mixins/flash";

    export default {
        mixins: [flash]
    }
</script>

<template>
  <main>
    <TheWelcome />

    <p>
      <button @click="flash('It Works!')">Click Me</button>
    </p>
  </main>
</template>
