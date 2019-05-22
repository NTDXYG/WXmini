const app = getApp();
Page({
  data: {
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList,
    page: 1,
    loadProgress: 0
  },
  loadMore: function (e) {
    var that = this;
    this.setData({
      isLoad: true
    })
    setTimeout(function () {
      wx.request({
        url: 'https://v.juhe.cn/joke/content/text.php?key=373fa0fca52a71c63db9db067dff999a&page=' + (++that.data.page) + '&pagesize=20',
        method: 'GET',
        header: {
          'Accept': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
          that.setData({
            isLoad: false,
            joke: that.data.joke.concat(res.data.result.data)
          })
        }
      })
    }, 1000);

  },
  loadProgress: function (e) {
    this.setData({
      loadProgress: this.data.loadProgress + 3
    })
    if (this.data.loadProgress < 100) {
      setTimeout(() => {
        this.loadProgress();
      }, 100)
    } else {
      this.setData({
        loadProgress: 0,
        page: 1
      })
      this.onLoad();
    }
  },
  onLoad() {
    var that = this;
    wx.request({
      url: 'https://v.juhe.cn/joke/content/text.php?key=373fa0fca52a71c63db9db067dff999a&page=' + (++that.data.page) + '&pagesize=20',
      method: 'GET',
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          joke: res.data.result.data
        })
      }
    })
  }
})