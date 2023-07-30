<template>
  <div>
    <button>{{ state.name }}</button>

    <ul>
      <li><a href="#">Get a Job</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </div>
</template>

<script setup>
  import { state } from "@/stores/quizStore";
</script>