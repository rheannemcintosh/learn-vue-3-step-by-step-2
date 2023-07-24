<script>
    import { useFlash } from "@/composables/useFlash";

    export default {
        setup() {
            let { flash } = useFlash();

            return { flash };
        }
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
