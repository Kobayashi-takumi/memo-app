<template>
    <div id="contents-detail">
        <div class="container">
            <i class="material-icons" @click="isDeactive">clear</i>
            <input type="text" class="forms" v-model="detailData.title">
            <textarea cols="30" rows="10" class="forms" v-model="detailData.contents"></textarea>
            <input type="text" class="forms">
            <div class="forms btn">
                <button>Update</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contents-detail',
    methods: {
        isDeactive() {
            this.$emit('is-deactive')
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
    margin: auto;
    border: 1px solid;
    border-radius: 10px;
    max-width: 1100px;
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
