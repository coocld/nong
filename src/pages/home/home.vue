<template>
  <div class="home">
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { homeData } from '../../utils/service'
import { Toast, MessageBox} from 'mint-ui'
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
  mounted () {
    this.getHomeData()
  },
  methods: {
    // handleClick: function() {
    //   Toast('提示信息')
    // },
    // async doLogin () {
    //   const { msg, data } = await configService.login(this.loginForm)
    //   if (msg && msg.code === '20000') {
    //     MessageBox('提示', msg.message)
    //   } else {
    //     MessageBox('提示', msg.message)
    //   }
    // },
    // getCardNo (params) {
    //   homeData.checkCard({
    //     params,
    //     cb: (data) => {
    //       MessageBox('提示', data)
    //     }
    //   })
    // },
    getHomeData () {
      homeData.homeSlide({
        cb: (data) => {
          console.log(data)
        }
      })
    }
  }
}
</script>

<style scoped>
  .mint-swipe{
    height: 350px;
    background: #f00
  }
</style>
