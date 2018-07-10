<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <mt-button class="add_btn" type="default" @click.native="getHomeData()">获取首页数据</mt-button>
    <mt-button type="primary" @click.native="doLogin">登陆</mt-button>
    <mt-button type="danger" @click.native="getCardNo('123123')">读卡信息</mt-button>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { configService, homeData } from '../../utils/service'
import { Toast, MessageBox } from 'mint-ui'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      loginForm: {
        loginName: '111',
        password: '111'
      }
    }
  },
  methods: {
    handleClick: function() {
      Toast('提示信息')
    },
    async doLogin () {
      const { msg, data } = await configService.login(this.loginForm)
      if (msg && msg.code === '20000') {
        MessageBox('提示', msg.message)
      } else {
        MessageBox('提示', msg.message)
      }
    },
    getCardNo (params) {
      homeData.checkCard({
        params,
        cb: (data) => {
          MessageBox('提示', data)
        }
      })
    },
    getHomeData (params) {
      homeData.homeDataList({
        params,
        cb: (data) => {
          MessageBox('提示', data)
        }
      })
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
  font-size: 80px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
