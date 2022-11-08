<template>
  <div id="app">
<<<<<<< HEAD
    <!-- <div><a href="https://wuwei.work/file/demo.pdf">文件下载</a></div> -->
    <!-- <router-view /> -->
    <iframe src="https://wuwei.work/wb-iframe/" frameborder="0"></iframe>
  </div>
</template>
<script>
export default{
mounted(){
  console.log('123');
//  let msg =  this.$message.error(123)
// setTimeout(() => {
  //    msg.close()
  // }, 500);
}

}

</script>
=======
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>
>>>>>>> 6f6aa81... vue2

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
