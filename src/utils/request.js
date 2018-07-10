import request from 'axios'
import qs from 'qs'
import { Indicator, MessageBox } from 'mint-ui'

let loadingInstance
const showLoading = () => {
  loadingInstance = Indicator.open({
                      text: '加载中...',
                      spinnerType: 'fading-circle'
                    })
}
const hideLoading = () => {
  Indicator.close()
}

class Request {
  constructor () {
    // 参数
    request.defaults.params = {}
    // 最大请求时间
    request.defaults.timeout = 120 * 1000
    // http code
    request.defaults.validateStatus = status => {
      return status >= 200 && status < 300
    }
    // 赋予内部
    this.instance = request
  }

  /*
  * @apiGet 公共get请求
  * @apiPost 公共post请求
  * @apiJson post参数json格式
  * @apiFile 公共上传
  * @url 必填
  * @params 必填
  * */

  apiGet (url, params = {}) {
    showLoading()
    return new Promise((resolve, reject) => {
      this.instance.get(`${url}`, { params }).then((res) => {
        hideLoading()
        resolve(res.data)
      }).catch((error) => {
        reject(error)
        hideLoading()
        MessageBox('提示', '网络异常')
      })
    })
  }

  apiPost (url, params = {}) {
    showLoading()
    return new Promise((resolve, reject) => {
      this.instance.post(`${url}`, qs.stringify({ params })).then((res) => {
        hideLoading()
        resolve(res.data)
      }).catch((error) => {
        reject(error)
        hideLoading()
        MessageBox('提示', '网络异常')
      })
    })
  }

  apiJson(url, params={}) {
    showLoading()
    return new Promise((resolve, reject) => {
      this.instance.post(`${url}`, { params }, {headers: { 'Content-Type': 'application/json' }}).then((res) => {
        hideLoading()
        resolve(res.data)
      }).catch((error) => {
        reject(error)
        hideLoading()
        MessageBox('提示', '网络异常')
      })
    })
  }

  apiFile(url, fileKey, file) {
    showLoading()

    const formData = new FormData()
    formData.append(fileKey, file)

    return new Promise((resolve, reject) => {
      this.instance.post(url, formData, {headers: { 'Content-Type': 'multipart/form-data' }}).then((res) => {
        hideLoading()
        resolve(res.data)

        this.checkResCode(res)
      }).catch(error => {
        hideLoading()
        reject(error)
        MessageBox('提示', '网络异常')
      })
    })
  }
}

export default new Request()
