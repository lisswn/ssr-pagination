# ssr-pagination

> 基于vue的可用于服务端渲染利于SEO的分页组件，同ElementUI的分页组件功能相似，适用于nuxt和vue项目。ElementUI的分页组件功能很全，但不适用于既是服务端渲染又对seo要求高的项目。此组件对seo做了额外处理，把分页链接都暴露给爬虫，利于seo。也可在vue单页应用中使用

## demo
  [demo page](https://lisswn.github.io/ssr-pagination/)

## npm

```
  $ npm install ssr-pagination -S
```

## use

```
  nuxt项目使用
  // page.js
  import Vue from 'vue';
  import Pagination from 'ssr-pagination'
  Vue.use(Pagination)
  
  // nuxt.config.js
  plugins: [
    { src: '~/plugins/page', ssr: false }
  ],
  
  vue项目使用
  import Pagination from 'ssr-pagination'
  Vue.use(Pagination)
  
  // list.vue
  <template>
    <div>
      <Pagination 
       :pageCount="totalPage"
       :currentPage="currentPage"
       @changePager="changePager"
      />
    </div>
  </template>
```
> 参数介绍
```
  total: 总页数
  pageSize: 每一页个数，默认为10
  pagerCount: 页码按钮的数量, 默认7，只取从5到21之间的奇数，如果传入5到21之间的偶数，自动减1
  currentPage: 当前页码
  pageCount: 总页数，total和pageCount只需传入其中一个值就可以
  linkPath: 分页页码前的路径，可以为空，eg：/p1,/p-1,/page1,/page-1中1前面的部分，默认为/page
  firstLink: 第一页时的路由链接，在ssr下有时需要第一页不显示分页路径，第二页才开始显示，如第一页：www.xxx.xx.com/list，第二页www.xxx.xx.com/list/page2，可不传，默认与link参数一致
  link: 其他页的路由链接，默认为空，如传'list'，结合linkPath，渲染的路由如：www.xxx.xx.com/list/page2
  useALink: 是否需要改为使用a标签跳转，默认使用nuxt-link单页跳转
  ssr: 是否使用ssr渲染模式，默认为true，服务端渲染使用nuxt-link跳转，为false时使用span通过事件传递出去处理，为true时通过useALink传true也可以改为使用a标签跳转
  confirmBtn: 是否显示确认跳转按钮，默认不显示
  
  如果样式不满足条件可以自行修改
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
