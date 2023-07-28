<script setup>

    textarea.addEventListener("keydown", (e) => {
        // Tab was pressed
        if (e.keyCode === 9) (
            // Get caret position / selection
            let val = textarea.value,
                start = textarea.selectionStart,
                end = textarea.selectionEnd;

            // Set textarea value to: text before caret + tab + text after caret
            textarea.value = val.substring(0, start) + "\t" + val.substring(end);

            // Put caret at right position again
            textarea.selectionStart = textarea.selectionEnd = start + 1;

            e.preventDefault();
        )
    })

</script>

<template>
    <main>
        <form>
            <textarea style="width: 100%; height: 300px;"></textarea>
        </form>
    </main>
</template>