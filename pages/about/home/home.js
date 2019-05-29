Component({
  options: {
    addGlobalClass: true,
  },
  lifetimes: {
    attached() {
      this.setData({ user: wx.getStorageSync('user')})
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  data: {
    starCount: 0,
    forksCount: 0,
    visitTotal: 0,
    user: wx.getStorageSync('user')
  },
  methods: {
    Copy() {
      wx.setClipboardData({
        data: 'https://github.com/NTDXYG/WXmini',
      })
    },
    getUserInfo() {//同意授权，获取用户信息
      wx.getUserInfo({
        success: res => {
          console.log(res.userInfo)
          this.setData({
            user: res.userInfo
          })
          wx.setStorageSync('user', res.userInfo)
        }
      })
    },
    onShareAppMessage() {
      return {
        title: '口袋食谱',
        imageUrl: '/images/BasicsBg.png',
        path: '/pages/index/index'
      }
    },
  }
})