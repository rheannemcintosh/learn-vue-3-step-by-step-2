<template>
    <header>
        <h1>{{ state.name }}</h1>

        <p>
            Welcome to your first quiy. How do you think you'll do?
        </p>
    </header>
</template>

<script setup>
    import { state } from "@/stores/quizStore";
</script>