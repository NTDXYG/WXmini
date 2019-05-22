const app = getApp();
Page({
  data: {
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList,
    page:1,
    loadProgress: 0
  },
  loadMore: function(e) {
    var that = this;
    this.setData({
      isLoad:true
    })
    setTimeout(function () {
      wx.request({
        url: 'https://api.apiopen.top/getJoke?page=' + (++that.data.page) + '&count=5&type=video',
        method: 'GET',
        header: {
          'Accept': 'application/json'
        },
        success: function (res) {
          console.log(res.data)
          that.setData({
            isLoad: false,
            video: that.data.video.concat(res.data.result)
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
  onLoad () {
    var that = this;
    wx.request({
      url: 'https://api.apiopen.top/getJoke?page='+this.data.page+'&count=5&type=video',
      method: 'GET',
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
          console.log(res.data)
          that.setData({
            video : res.data.result
          })
      }
    })
  }
})