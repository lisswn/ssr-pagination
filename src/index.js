import SsrPagination from './components/pager'

SsrPagination.install = (Vue) => {
  Vue.component('SsrPagination', SsrPagination)
}

if (typeof window !== "undefined" && window.Vue) {
  SsrPagination.install(window.Vue)
}

export default SsrPagination
