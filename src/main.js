import Vue from "vue";
// 引入app.vue这个根组件
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入vant-ui
import Vant from 'vant';

// 引入reset重置样式
import "./assets/style/reset.scss";

// 引入iconfont的css
import "./assets/font/iconfont.css";

// 引入amfe-flexible插件
import "amfe-flexible";

// 引入vant对应的css
import 'vant/lib/index.css';

Vue.use(Vant);

// 用来关闭开发环境的提示信息
Vue.config.productionTip = true;

new Vue({
  router: router,
  store: store,
  render: h => h(App)
}).$mount("#app");
