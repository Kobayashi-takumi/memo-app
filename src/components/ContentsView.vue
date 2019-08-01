<template>
    <div id='view'>
        <div class="wrapper grid">
            <div v-for='(item, index) in items' :key="item.id" class="item">
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
/* eslint-disable  no-console*/
import db from '../firebase/firestore.js'
import firebase from '@firebase/app'

export default {
    name: 'view',
    data() {
        return {
            items: [],
            writeMode: false,
        }
    },
    methods: {
        addNewMemo() {
            const memos = db.collection('memo-data').doc(this.$store.getters.user.uid).collection('memos')
            memos.add ({
                title: '新しいメモ',
                contents: '',
                tags: [],
                created_at: firebase.firestore.FieldValue.serverTimestamp()
            })
        },
        deleteMemo(index) {
            const memos = db.collection('memo-data').doc(this.$store.getters.user.uid).collection('memos').doc(this.items[index].id)
            memos.delete();
            this.items.splice(index, 1);
        },
        detailMemo(data) {
            this.$store.commit('setMemoData', data)
            this.$emit('get-detail')
        },
        timestamp() {
            let date = new Date();
            let timestamp = date.getTime();
            return Math.floor( timestamp / 1000);
        },
    },
    created() {
        const memos = db.collection('memo-data').doc(this.$store.getters.user.uid).collection('memos').orderBy('created_at', 'desc')
        memos.onSnapshot(querySnapshot => {
            querySnapshot.forEach( doc => {

                let id_ary = new Array();
                this.items.forEach( val => {
                    id_ary.push(val.id);
                });

                if (id_ary.includes(doc.id) === false) {
                    this.items.push({
                    'id': doc.id,
                    'title': doc.data().title,
                    'contents': doc.data().contents,
                    'tags': doc.data().tags,
                    'created_at': doc.data().created_at,
                    })
                }
            })
        })
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
    border: solid 1px rgba( 50, 90, 150, 1);
    background-color: rgba( 153, 192, 255, 0.1);
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

@media (max-width: 700px) {
    .grid {
        display: flex;
        flex-direction: column;
        margin-top: 3%;
        margin-bottom: 50px; 
    }
    .item {
        margin-top: 3%; 
    }
}

</style>
