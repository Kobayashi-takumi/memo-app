<template>
    <div id="contents-detail">

        <div class="container" v-if="writeMode">
            <i class="material-icons common-icons" @click="isDeactive">clear</i>
            <input type="text" class="forms" v-model="detailData.title">
            <textarea cols="30" rows="10" class="forms" v-model="detailData.contents"></textarea>
            <div class="detail-tags">
                    <div v-for="(tag, index) in detailData.tags" :key="index" class="tag">
                        {{ tag }}
                        <i class="material-icons common-icons" @click="tagClear(index)">clear</i>
                    </div>
                    <div class="tag new-tag" v-if="tagAddMode" >
                        <input type="text" v-model='tag' @blur='tagAddModeOff' @keydown.enter="tagAdd(); tagAddModeOff();">
                    </div>
                    <div class="tag new-tag" v-else>
                        new
                        <i class="material-icons common-icons" @click="tagAddModeOn">create</i>
                    </div>
            </div>
            <div class="forms btn">
                <button @click="writeModeOn">Update</button>
            </div>
        </div>

        <div class="container" v-else>
            <i class="material-icons common-icons" @click="isDeactive">clear</i>
            <div class="views">
                <p>{{ detailData.title }}</p>
                <p>{{ detailData.contents }}</p>
                <div class="detail-tags">
                    <div>tag:</div>
                    <div v-for="(tag, index) in detailData.tags" :key="index" class="tag">{{ tag }}</div>
                </div>
            </div>
            <div class="forms btn">
                <i class="material-icons common-icons" @click="writeModeOn">create</i>
            </div>
        </div>

    </div>
</template>

<script>
/* eslint-disable  no-console*/

export default {
    name: 'contents-detail',
    data() {
        return {
            writeMode: false,
            tagAddMode: false,
            tag: '',
        }
    },
    methods: {
        isDeactive() {
            this.$emit('is-deactive')
        },
        writeModeOn() {
            this.writeMode = !this.writeMode;
        },
        tagAddModeOn() {
            this.tagAddMode =  true;
        },
        tagAddModeOff() {
            this.tagAddMode = false;
        },
        tagAdd() {
            this.detailData.tags.push(this.tag);
            this.tag = '';
        },
        tagClear(id) {
            this.detailData.tags.splice(id, 1);
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
    border: 1px solid rgba( 50, 90, 150, 1);
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
    font-size: 16px;
}

.container input, textarea {
    border: 1px solid rgba( 153, 192, 255, 1);
    border-radius: 5px;
}

.btn {
    display: flex;
    justify-content: flex-end;
}

.detail-tags {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
}
</style>
