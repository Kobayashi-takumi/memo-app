<template>
    <div id='contents-title'>
        <div class="page-content wrapper">
                <p class="page-title">Title</p>
                <p class="page-sub-title">高機能メモアプリ</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'contents-title',
}
</script>

<style>

.wrapper {
    text-align: center;
    max-width: 1100px;
    margin: 10px auto;
    padding: 0 4%;
}

.page-content {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(../image/ole-witt-d-Kq8TmxlK0-unsplash.jpg);
    min-height: 500px;
}

.page-content p {
    font-size: 1.125rem;
    margin: 10px 0 42px;
}

</style>
