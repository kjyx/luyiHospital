<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
export default {
  name:'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>
