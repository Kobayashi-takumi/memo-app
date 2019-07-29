<template>
    <div id="contents-detail">
        <div class="container">
            <i class="material-icons" @click="isDeactive">clear</i>
            <input type="text" class="forms">
            <textarea cols="30" rows="10" class="forms"></textarea>
            <input type="text" class="forms">
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
    border-radius: 10px
}
</style>
