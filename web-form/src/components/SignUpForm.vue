<template>

    <div class="uk-width-1-4 uk-margin-auto">
        <form>
            <fieldset class="uk-fieldset">

                <legend class="uk-legend">Sign Up</legend>

                <div class="uk-margin">
                    <input class="uk-input" type="text" v-model="name" placeholder="Enter your name" required>
                </div>

                <div class="uk-margin">
                    <input class="uk-input" type="email" v-model="email" placeholder="Enter your email" required>
                </div>

                <div class="uk-margin">
                    <input class="uk-input" type="password" v-model="password" placeholder="Enter your password" required>
                </div>

                <div class="uk-margin">
                    <select class="uk-select" v-model="role">
                        <option value="designer">Web Designer</option>
                        <option value="developer">Web Developer</option>
                    </select>
                </div>

                <div class="uk-margin">
                    <input class="uk-input" type="text" v-model="tempSkill" @keyup="addSkill" placeholder="Type your skills separated by comma">
                </div>

                <div class="uk-margin uk-flex uk-flex-left uk-flex-middle">
                    <input class="uk-checkbox uk-margin-right" v-model="terms" type="checkbox" required>
                    <label>Accept terms and conditions</label>
                </div>

                <div class="uk-margin">
                    <button class="uk-button uk-button-default">Submit</button>
                </div>

            </fieldset>
        </form>
    </div>

    <p> {{name}} <br> {{email}} <br> {{password}} <br> {{role}} <br> {{terms}} </p>
    <div>
        <span v-for="skill in skills" :key="skill" @click="deleteSkill" class="pill">
            {{skill}}
        </span>
    </div>

</template>

<script>

export default {

    data() {
        return {
            name: '',
            email: '',
            password: '',
            role: 'designer',
            terms: false,
            tempSkill: '',
            skills: []
        }
    },
    methods: {
        addSkill(e) {
            if (e.key === ',' && this.tempSkill) {
                this.tempSkill = this.tempSkill.slice(0, -1)
                if (!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill)
                }
                this.tempSkill = ''
            }
        },
        deleteSkill(e) {
            const content = e.target.innerText
            const index = this.skills.indexOf(content)
            if (index != -1) {
                this.skills.splice(index, 1)
            }
        }
    }

}

</script>

<style scoped>

.pill {

border-radius: 10px; 
background: red; 
padding: 10px; 
margin-right: 5px;

}

</style>