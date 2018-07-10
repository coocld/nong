const type = 'dev'
const baseUrl = type === 'dev' ? 'http://localhost:8080/static/data' : 'http://47.96.148.117:8080'

export default {
  config: {  //公共接口
    login: baseUrl + '/login.json'
  },
  home: {  //首页用户接口
    tableList: baseUrl + '/home.json',
    cardData: '/api/tk/recharge/checkCard'
  }
}
