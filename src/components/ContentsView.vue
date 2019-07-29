<template>
    <div id='view'>
        <div class="wrapper grid">
            <div v-for='(item, index) in items' :key="item" class="item">
                <p>{{ item.title }}</p>
                <p>contents</p>
                <div class="icons">
                    <i class="material-icons">announcement</i>
                    <i class="material-icons" @click="writeModeOn">create</i>
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
                {title: 'test1'},
                {title: 'test2'},
                {title: 'test3'},
                {title: 'test4'},
            ],
            writeMode: false,
        }
    },
    methods: {
        addNewMemo() {
            this.items.push({
                title: '新しいメモ',
            });
        },
        deleteMemo(id) {
            this.items.splice(id, 1);
        },
        writeModeOn() {
            this.writeMode = !this.writeMode;
        }
    }
}
</script>

<style>
.grid {
    display: grid;
    gap: 26px;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 6%;
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
    margin-top: auto; 
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

.icons i {
    margin-left: 10px;
}
</style>
