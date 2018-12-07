import api from './api'
import request from './request'
import { MessageBox } from 'mint-ui'
// 首页
const homeData = {
  async homeSlide ({ cb }) { // 获取首页数据
    const { data } = await request.apiJson(api.home.homeSlide)
    cb(data)
  }
}

export {
  homeData
}
