<template>
  <div id="app">
    <div>
      <span>使用a标签跳转，由于没有加路由，点击后会404，只是鼠标移上去可以查看链接效果</span>
      <Pagination
        :pageCount="30"
        :currentPage="10"
        :use-a-link="true"
        first-link="list"
        link="list"
        :confirm-btn="true"
        @changePager="changePager"
      />
    </div>
    <div>
      <span>使用普通事件传递到父组件跳转,设置分页按钮为11个</span>
      <Pagination
        :pageCount="40"
        :currentPage="5"
        :pager-count="11"
        :ssr="false"
        @changePager="changePager"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
    }
  },
  methods: {
    changePager(page) {
      console.log(page)
    }
  },
  created() {
    const path = location.pathname.split('page')[1]
    this.currentPage = path ? Number(path) : 1
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 30px;
}
</style>
