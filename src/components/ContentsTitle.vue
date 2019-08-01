<template>
    <div id='contents-title'>
        <div class="page-content wrapper title-container">
            <div class="box">
                <p class="page-title">Title</p>
                <p class="page-sub-title">高機能メモアプリ</p>
            </div>
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
    max-width: 1100px;
    margin: 10px auto;
    padding: 0 4%;
}

.page-content {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(../image/dollar-gill-0V7_N62zZcU-unsplash.jpg);
    min-height: 500px;
}

.title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.box {
    font-size: 1.125rem;
    margin: 10px 0 42px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(18px);
    border-radius: 10px;
}

.page-title {
    font-size: 50px;
}

.page-sub-title {
    font-size: 30px;
}

</style>
