const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    TabCur: 0,
    categoryList: [],
    action: 0,
    inputvalue: ''
  }, 
  search(e) {
    wx.navigateTo({
      url: '/pages/basics/food/list?keyname=' + this.data.inputvalue + '&category=1',
    })
    this.setData({
      inputvalue: ''
    })
  },
  getvalue(e) {
    this.setData({
      inputvalue: e.detail.value
    })
    console.log(this.data.inputvalue);
  },
  onLoad() {
    var that = this;
    wx.request({
      url: "https://api.360meishi.net/?c=category&a=standcategory",
      method: "GET",
      data: {},
      success: res => {
        this.data.categoryList = res.data.data;
        this.data.action = res.data.data[0].cName;
        that.setData({
          categoryList: this.data.categoryList,
          menu: this.data.categoryList[0].child
        })
        console.log(this.data.menu);
      }
    })
  },
  query(e) {
    wx.navigateTo({
      url: '/pages/basics/food/list?id=' + e.target.dataset.id + '&name=' + e.target.dataset.name+'&category=0',
    })
  },
  tabSelect(e) {
    this.setData({
      menu: this.data.categoryList[e.currentTarget.dataset.id].child,
      TabCur: e.currentTarget.dataset.id
    })
    console.log(this.data.menu)
  },
})