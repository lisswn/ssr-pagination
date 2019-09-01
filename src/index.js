import Pagination from './components/pager'

Pagination.install = (Vue) => {
  Vue.component('Pagination', Pagination)
}

if (typeof window !== "undefined" && window.Vue) {
  Pagination.install(window.Vue)
}

export default Pagination
