<template>
    <h2>Job Details</h2>
    <div v-if="job">
        <h3>{{ job.title }}</h3>
        <p>{{ job.details }}</p>
    </div>
    <div v-else>
        Loading a job...
    </div>
</template>

<script>

export default {
    props: ['id'],
    data() {
        return {
            job: null
        }
    }, 
    mounted() {
        fetch(' http://localhost:3000/jobs/' + this.id)
            .then(res => res.json())
            .then(data => this.job = data)
            .catch(err => console.log(err.message));
    }
}

</script>
