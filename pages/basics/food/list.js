Page({
  data: {
    page: 0
  },
  detail(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/basics/food/detail?id=' + e.currentTarget.dataset.code
    })
  },
  loadMore: function (e) {
    var that = this;
    this.setData({
      isLoad: true
    })
    setTimeout(function () {
      if (that.data.category==0){
        wx.request({
          url: 'https://ntdxyg.mynatapp.cc/cook/listByCategory',
          method: 'GET',
          data: {
            "cateid": that.data.id,
            "page": ++that.data.page
          },
          header: {
            'Accept': 'application/json'
          },
          success: function (res) {
            console.log(res.data)
            that.setData({
              isLoad: false,
              list: that.data.list.concat(res.data.data)
            })
          }
        })
      }else{
        wx.request({
          url: 'https://ntdxyg.mynatapp.cc/cook/listByKeyname',
          method: 'GET',
          data: {
            "keywords": that.data.keyname,
            "page": (++that.data.page)
          },
          header: {
            'Accept': 'application/json'
          },
          success: function (res) {
            console.log(res.data)
            that.setData({
              isLoad: false,
              list: that.data.list.concat(res.data.data)
            })
          }
        })
      }
    }, 1000);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,
      name: options.name,
      category: options.category,
      keyname: options.keyname
    })
    var that = this;
    if (options.category == 0) {
      //分类查找
      wx.request({
        url: 'https://ntdxyg.mynatapp.cc/cook/listByCategory',
        method: 'GET',
        data: {
          "cateid": options.id,
          "page": 0
        },
        header: {
          'Accept': 'application/json'
        },
        success: function (res) {
          console.log(res.data.data)
          that.setData({
            list: res.data.data
          })
        }
      })
    } else {
      //关键词查找
      wx.request({
        url: 'https://ntdxyg.mynatapp.cc/cook/listByKeyname',
        method: 'GET',
        data: {
          "keywords": options.keyname,
          "page": 0
        },
        header: {
          'Accept': 'application/json'
        },
        success: function (res) {
          console.log(res.data.data)
          that.setData({
            list: res.data.data
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})