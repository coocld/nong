import api from './api'
import request from './request'
import { MessageBox } from 'mint-ui'
// 全局service
const configService = {
  login (params) { // 登录
    return request.apiGet(api.config.login, params)
  },
  async todayDealOrder ({ params, cb }) {
    const { msg, data, page } = await request.apiGet(api.config.todayDealOrder, params)
    if (msg && msg.code === '20000') cb(data, page)
    else MessageBox('提示', msg.message)
  }
}
// 首页
const homeData = {
  async homeDataList ({ params, cb }) { // 获取首页数据
    const { msg, data } = await request.apiGet(api.home.tableList, params)
    if (msg && msg.code === '20000') cb(data)
    else MessageBox('提示', msg.message)
  },
  async checkCard ({ params, cb }) { // 获取卡信息 跨域走代理
    const { msg, data } = await request.apiJson(api.home.cardData, params)
    if (msg && msg.code === '20000') cb(data)
    else MessageBox('提示', msg.message)
  }
}

export {
  configService,
  homeData
}
