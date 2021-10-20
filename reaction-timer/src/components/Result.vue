<template>
    <p>Your score is {{ score }} ms</p>
    <p class="rank">{{ rank }}</p>
</template>

<style>

.rank {
    font-size: 1.4em;
    color: #0faf87;
    font-weight: bold;
}

</style>

<script>

export default {
    props: ['score'],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if (this.score < 250) {
            this.rank = 'Amazing skills!'
        } else if (this.score < 400) {
            this.rank = 'You are fast'
        } else {
            this.rank = 'Are you a snail?'
        }
    }
}

</script>
