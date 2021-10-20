<template>
    
    <h1>Jobs</h1>
    <div v-if="jobs.length">
        <div v-for="job in jobs" :key="job.id" class="link-wrapper">
            <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
                {{ job.title }}
            </router-link>
        </div>
    </div>
    <div v-else>
        <p>Loading jobs...</p>
    </div>

</template>

<style>

.link-wrapper {
    margin: 10px 0;
}

.link-wrapper > a {
    font-size: 20px;
    text-decoration: none;
    color: blueviolet;
}

</style>

<script>
export default {
    data() {
        return {
            jobs: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => this.jobs = data)
            .catch(err => console.log(err.message));
    }
}
</script>
