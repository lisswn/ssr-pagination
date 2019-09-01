<template>
  <div id="app">
    <SsrPagination
      :pageCount="totalPage"
      :currentPage="currentPage"
      :ssr="false"
      @changePager="changePager"
    />
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      totalPage: 30,
      currentPage: 10
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
}
</style>
