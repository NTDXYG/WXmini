const app = getApp();
Page({
  data: {
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList,
    page: 1,
    loadProgress: 0
  },
  chooseCity: function(e){
    console.log("切换")
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
      url: 'https://apis.juhe.cn/simpleWeather/query?city='+ '南通' +'&key=e625b595fadbed89bd64a3a69d87264b',
      method: 'GET',
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        var weekDay = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
        for (var i in res.data.result.future) {
          res.data.result.future[i].week = (weekDay[new Date(res.data.result.future[i].date).getDay()]),
            res.data.result.future[i].data = res.data.result.future[i].date.substring(5,10)
        }
        console.log(res.data.result.future)
        that.setData({
          future: res.data.result.future,
          realtime: res.data.result.realtime
        })
      }
    })
  }
})