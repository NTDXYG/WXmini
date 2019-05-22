Component({
  options: {
    addGlobalClass: true,
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
        data: 'https://github.com/NTDXYG',
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
    }
  }
})