const app = getApp();
Page({
  data: {
    key: '0cd1f755d40fdbc05b3704a215afac59',
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    tabNav: ['头条', '社会', '国内', '国际', '娱乐']
  },
  onLoad: function() {
    var that = this;
    wx.request({
        url: 'https://v.juhe.cn/toutiao/index?type=top&key=' + that.data.key,
        method: 'GET',
        data: {},
        header: {
          'Accept': 'application/json'
        },
        success: function(res) {
          if (res.data.result.stat == '1') {
            that.setData({
              hot: res.data.result.data
            })
          } else {
            wx.showToast({
              title: '请求失败',
              icon: 'none'
            })
          }
        }
      }),
      wx.request({
        url: 'https://v.juhe.cn/toutiao/index?type=shehui&key=' + that.data.key,
        method: 'GET',
        data: {},
        header: {
          'Accept': 'application/json'
        },
        success: function(res) {
          if (res.data.result.stat == '1') {
            that.setData({
              shehui: res.data.result.data
            })
          } else {
            wx.showToast({
              title: '请求失败',
              icon: 'none'
            })
          }
        }
      }),
      wx.request({
      url: 'https://v.juhe.cn/toutiao/index?type=guonei&key=' + that.data.key,
        method: 'GET',
        data: {},
        header: {
          'Accept': 'application/json'
        },
        success: function (res) {
          if (res.data.result.stat == '1') {
            that.setData({
              guonei: res.data.result.data
            })
          } else {
            wx.showToast({
              title: '请求失败',
              icon: 'none'
            })
          }
        }
      }),
      wx.request({
        url: 'https://v.juhe.cn/toutiao/index?type=guoji&key=' + that.data.key,
        method: 'GET',
        data: {},
        header: {
          'Accept': 'application/json'
        },
        success: function (res) {
          if (res.data.result.stat == '1') {
            that.setData({
              guoji: res.data.result.data
            })
          } else {
            wx.showToast({
              title: '请求失败',
              icon: 'none'
            })
          }
        }
      }),
      wx.request({
        url: 'https://v.juhe.cn/toutiao/index?type=yule&key=' + that.data.key,
        method: 'GET',
        data: {},
        header: {
          'Accept': 'application/json'
        },
        success: function (res) {
          if (res.data.result.stat == '1') {
            that.setData({
              yule: res.data.result.data
            })
          } else {
            wx.showToast({
              title: '请求失败',
              icon: 'none'
            })
          }
        }
      })
  },
  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  Copy(e) {
    var that = this
    wx.setClipboardData({
      data: e.currentTarget.dataset.link,
      success: function(res) {
        wx.getClipboardData({
          success: function(res) {
            that.setData({
              modalName: 'Modal'
            })
          }
        })
      }
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
})