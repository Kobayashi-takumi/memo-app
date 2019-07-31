<template>
    <div id='view'>
        <div class="wrapper grid">
            <div v-for='(item, index) in items' :key="index" class="item">
                <p>{{ item.title }}</p>
                <p>{{ item.contents }}</p>
                <div class="tags">
                    <div class="tag-title">tag:</div>
                    <div v-for='(tag, index) in item.tags' :key='index' class="tag">{{ tag }}</div>
                </div>
                <div class="icons">
                    <i class="material-icons common-icons" @click="detailMemo(items[index])">announcement</i>
                    <i class="material-icons common-icons" @click="deleteMemo(index)">delete_outline</i>
                </div>
            </div>

            <div class="new item">
                <p>New Memo</p>
                <a @click="addNewMemo"><i class="material-icons common-icons">add</i></a>
            </div>
        </div>
    </div>
</template>

<script>
import db from '../firebase/firestore.js'

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
                contents: `content${this.items.length + 1}`,
                tags: [],
            });
        },
        deleteMemo(id) {
            this.items.splice(id, 1);
        },
        detailMemo(data) {
            this.$store.commit('setMemoData', data)
            this.$emit('get-detail')
        },
        getMemos() {
            const memos =db.collection('memo-data').doc('IKpdfpt8zQH9M04GdujY').collection('memos')
            memos.onSnapshot(querySnapshot => {
                querySnapshot.forEach( doc => {
                    let data = {
                        'id': doc.id,
                        'title': doc.data().title,
                        'contents': doc.data().contents,
                        'tags': doc.data().tags,
                        'created_at': doc.data().created_at,
                    }
                    this.items.push(data)
                })
            })
        },
        created() {
            this.getMemos();
        }
    },
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
    border: solid 1px rgba( 50, 90, 150, 1);
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
    flex-wrap: wrap;
}

.tag {
    margin: 5px;
    border: 1px solid rgba( 153, 192, 255, 1);
    background-color: rgba( 153, 192, 255, 0.5);
    border-radius: 10px;
    padding: 3px;
}

.tag-title{
    margin-left: 3px;
}

.common-icons {
    color: rgba( 50, 90, 150, 1);
}
</style>
