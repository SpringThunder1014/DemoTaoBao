<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>

  export default {
    name: 'TabBar'
  }
</script>

<style>
  #tabbar {
    display: flex;
    flex-direction: row;
    position: absolute;
    left: 0px;
    bottom: 0px;
    right: 0px;
  }


</style>
