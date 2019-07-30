<template>
    <div id="contents-detail">
        <div class="container" v-if="writeMode">
            <i class="material-icons" @click="isDeactive">clear</i>
            <input type="text" class="forms" v-model="detailData.title">
            <textarea cols="30" rows="10" class="forms" v-model="detailData.contents"></textarea>
            <input type="text" class="forms">
            <div class="forms btn">
                <button @click="writeModeOn">Update</button>
            </div>
        </div>
        <div class="container" v-else>
            <i class="material-icons" @click="isDeactive">clear</i>
            <div class="views">
                <p>{{ detailData.title }}</p>
                <p>{{ detailData.contents }}</p>
            </div>
            <div class="forms btn">
                <i class="material-icons" @click="writeModeOn">create</i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contents-detail',
    data() {
        return {
            writeMode: false,
        }
    },
    methods: {
        isDeactive() {
            this.$emit('is-deactive')
        },
        writeModeOn() {
            this.writeMode = !this.writeMode;
        }
    },
    computed: {
        detailData() {
            return this.$store.getters.memoData
        }
    }
}
</script>

<style>

.container {
    display: flex;
    flex-direction: column;
    margin: 3% auto;
    border: 1px solid;
    border-radius: 10px;
    max-width: 1100px;
}

.views {
    text-align: center;
}

.views p {
    margin: 5%;
}

.forms {
    margin: 20px; 
    font-size: 18px;
}

.btn {
    display: flex;
    justify-content: flex-end;
}
</style>
