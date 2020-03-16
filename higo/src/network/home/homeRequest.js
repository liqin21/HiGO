import {baseRequest} from 'network/baseRequest.js'

function homeMultiData() {
  return baseRequest({
      url: '/home/multidata'
    })
}

function getHomeGoods(type, page) {
  return baseRequest({
    //http://123.207.32.32:8000/api/wh/home/data?page=1&type=sell
    url: 'home/data',
    params: {
      type,
      page
    }
  })
}

export {
  homeMultiData,
  getHomeGoods
}
