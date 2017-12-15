<template>
  <div id="chat">
    <div style="margin-top: 0%">
    <van-row gutter="20">
      <van-col span="24">
        <van-swipe :autoplay="2400">
          <van-swipe-item v-for="thumb in images" :key="thumb">
            <img :src="thumb" style="width: 100%;height: 150px" >
          </van-swipe-item>
        </van-swipe>
      </van-col>
    </van-row>
  </div>
  </div>
</template>

<script>
    export default {
      name: "chat",
      data() {
        return {
          images: [
            'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
            'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
          ]
        }
      }
    }
</script>

<style scoped>

</style>
