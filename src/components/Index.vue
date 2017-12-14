<template>
    <div id="index">
      <van-notice-bar mode="closeable">
        约球全明星即将开战
      </van-notice-bar>

      <router-view></router-view>
      <van-tabbar v-model="active" style="background-color: lightgrey">
        <van-tabbar-item icon="home" to="/hello"></van-tabbar-item>
        <van-tabbar-item icon="chat" dot to="/chat"></van-tabbar-item>
        <van-tabbar-item icon="contact" info="20" to="/profile"></van-tabbar-item>
      </van-tabbar>

    </div>
</template>

<script>
    export default {
      name: "index",
      data() {
        return {
          active: 0,
          images: [
            'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
            'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
            'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
            'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg'
          ]
        }
      },
    }
</script>

<style scoped>

</style>
