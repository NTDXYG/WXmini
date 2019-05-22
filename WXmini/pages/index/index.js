Page({
  data: {
    PageCur: 'basics'
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onShareAppMessage() {
    return {
      title: '实用类小程序',
      imageUrl: '/images/BasicsBg.png',
      path: '/pages/index/index'
    }
  },
})