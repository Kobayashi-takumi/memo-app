<template>
    <div id='view'>
        <div class="wrapper grid">
            <div v-for='(item, index) in items' :key="index" class="item">
                <p>{{ item.title }}</p>
                <p>{{ item.contents }}</p>
                <div class="tags">
                    <div>tag:</div>
                    <div v-for='(tag, index) in item.tags' :key='index' class="tag">{{ tag }}</div>
                </div>
                <div class="icons">
                    <i class="material-icons" @click="detailMemo(items[index])">announcement</i>
                    <i class="material-icons" @click="deleteMemo(index)">delete_outline</i>
                </div>
            </div>

            <div class="new item">
                <p>New Memo</p>
                <a @click="addNewMemo"><i class="material-icons">add</i></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'view',
    data() {
        return {
            items: [
                {title: 'test1', contents: 'content1', tags: ['python', 'javascript']},
                {title: 'test2', contents: 'content2', tags: ['python', 'javascript']},
                {title: 'test3', contents: 'content3', tags: ['python', 'javascript']},
                {title: 'test4', contents: 'content4', tags: ['python', 'javascript']},
            ],
            writeMode: false,
        }
    },
    methods: {
        addNewMemo() {
            this.items.push({
                title: '新しいメモ',
                contents: `content${this.items.length + 1}`
            });
        },
        deleteMemo(id) {
            this.items.splice(id, 1);
        },
        detailMemo(data) {
            this.$store.commit('setMemoData', data)
            this.$emit('get-detail')
        }
    }
}
</script>

<style>
.grid {
    display: grid;
    gap: 26px;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 3%;
    margin-bottom: 50px; 
}

.item {
    border: solid 1px;
    border-radius: 10px;
    text-align: center;
    height: 300px;
    display: flex;
    flex-direction: column;
}

.icons {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

.icons i {
    margin-left: 10px;
}

.tags {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: auto;
}

.tag {
        margin: 5px;
        border: 1px solid;
        border-radius: 10px;
        padding: 1px;
}
</style>
