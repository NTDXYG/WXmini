Page({
  data: {
    PageCur: 'index'
  },
  toBasics(e) {
    this.setData({
      PageCur: 'basics'
    })
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onShareAppMessage() {
    return {
      title: '口袋食谱',
      imageUrl: '/images/BasicsBg.png',
      path: '/pages/index/index'
    }
  },
})