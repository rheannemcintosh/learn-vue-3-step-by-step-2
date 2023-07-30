<template>
  <h1>{{ name }}</h1>
  <QuizHeader />

  <QuizQuestion />

  <QuizFooter :quiz="quiz" />
</template>

<script setup>
  import QuizHeader from "@/components/Quiz/QuizHeader.vue";
  import QuizQuestion from "@/components/Quiz/QuizQuestion.vue";
  import QuizFooter from "@/components/Quiz/QuizFooter.vue";
</script>