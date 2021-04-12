<template>

    <div class="baritem" @click="itemclick">



    <slot name="item-img" v-if="!isactive">  <img src="" alt=""></slot>
        <slot v-else name="item-img-active"><img src="" alt=""></slot>
          <div :style="activestyle">  <slot name="item-title" >首页</slot></div>
    </div>
</template>

<script>
  export default {
    name:'TabBarItem',
    props:{
      path:{
        tpey:String,
        default:'/'
      },
     activecolor:{
       type:String,
       default:'#45cc12'
     }
    },
    computed:{
      isactive:{
          get(){
           return this.$route.path.indexOf(this.path) !== -1
           },
           set(){}
      },
      activestyle(){
        return this.isactive?{color:this.activecolor}:{}
      }
    },
    methods:{
      itemclick(){
        // console.log('-----------------------'+ this.$route.path+'----------'+ this.$router.path);
        this.isactive=!this.isactive
          if (this.$route.path !== this.path) {
            this.$router.push({ path: this.path })
          }

      }
    }
  }
</script>

<style scoped>
  #tabbar {
    display: flex;
    flex-direction: row;
    position: absolute;
    left: 0px;
    bottom: 0px;
    right: 0px;
  }
  .baritem {
    flex: 1;
    background-color: #c8c8c8;
    color: #ffffff;
    height: 49px;
    text-align: center;
  }

  .baritem img {
    width: 20px;
    height: 20px;
    margin-top: 5px;
  }
  .active{
    color: #ff00ff ;
  }
</style>
