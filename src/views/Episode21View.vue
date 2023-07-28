<script setup>

    import { ref } from "vue";

    function onTabPress() {
        let textarea = e.target;

        // Get caret position / selection
        let val = textarea.value,
            start = textarea.selectionStart,
            end = textarea.selectionEnd;

        // Set textarea value to: text before caret + tab + text after caret
        textarea.value = val.substring(0, start) + "\t" + val.substring(end);

        // Put caret at right position again
        textarea.selectionStart = textarea.selectionEnd = start + 1;
    }

</script>

<template>
    <main>
        <form>
            <textarea @keydown.tab.prevent="onTabPress" style="width: 100%; height: 300px;">Hi There</textarea>
        </form>
    </main>
</template>