<script>
    import swal from 'sweetalert';
    export default {
        methods: {
            flash(message) {
                swal('Success!', message, 'success');
            }
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
