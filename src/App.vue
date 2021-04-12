<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item v-for="item in menulist" :path="item.url" :activecolor="item.activecolor">
        <img slot="item-img" :src="'./static'+item.img" alt="">
        <img slot="item-img-active" :src="'./static'+item.imgactive" alt="">
        <div slot="item-title">{{item.title}}</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import * as requestyu from './network/request.js'
  import TabBar from './components/tabbar/TabBar.vue'
    import  TabBarItem from './components/tabbar/TabBarItem'
export default {
  name: 'App',
  data(){
   return {
     menulist:[]
   }
  },
  components:{
    TabBar,
    TabBarItem
  },
  created() {
    // console.log(requestyu);
    requestyu.request({
      url:'/api/getmenulist'
    },res=>{
      // console.log(res);
      this.menulist=res.data.data.menulist
    },res=>{
       // console.log('---回调---'+res);
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0px;
  padding: 0px;
}
</style>
