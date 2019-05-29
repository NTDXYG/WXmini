Component({
  options: {
    addGlobalClass: true,
  },
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      var that = this;
      wx.request({
        url: "https://ntdxyg.mynatapp.cc/cook/banner",
        method: "GET",
        data: {},
        success: res => {
          that.setData({
            swiperList: res.data.data
          })
        }
      })
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  methods: {
    // cardSwiper
    cardSwiper(e) {
      this.setData({
        cardCur: e.detail.current
      })
    },
    toMore() {
      const myEventDetail = {} // detail对象，提供给事件监听函数
      const myEventOption = {} // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    },
    toDetail(e) {
      wx.navigateTo({
        url: '/pages/basics/food/detail?id=' + e.currentTarget.dataset.code
      })
    },
    gotoDetail(e) {
      wx.navigateTo({
        url: '/pages/basics/food/list?id=' + e.currentTarget.dataset.id + '&name=' + e.currentTarget.dataset.name + '&category=0',
      })
    }
  },
  data: {
    cardCur: 0,
    iconList: [{
      icon: 'cardboardfill',
      color: 'red',
      id: 317,
      name: '早餐'
    }, {
      icon: 'recordfill',
      color: 'orange',
      id: 331,
      name: '早午餐'
    }, {
      icon: 'picfill',
      color: 'yellow',
      id: 319,
      name: '中餐'
    }, {
      icon: 'noticefill',
      color: 'olive',
      id: 320,
      name: '下午茶'
    }, {
      icon: 'upstagefill',
      color: 'cyan',
      id: 318,
      name: '晚餐'
    }, {
      icon: 'clothesfill',
      color: 'blue',
      id: 321,
      name: '夜宵'
    }],
    elements: [{
        title: '开胃',
        name: 'Appetizing',
        id: '25',
        color: 'orange',
        icon: 'colorlens'
      },
      {
        title: '创意',
        id: '16',
        name: 'Creative',
        color: 'brown',
        icon: 'font'
      },
      {
        title: '清淡 ',
        id: '264',
        name: 'Light',
        color: 'mauve',
        icon: 'icon'
      },
      {
        title: '麻辣',
        id: '266',
        name: 'Light',
        color: 'purple',
        icon: 'tagfill'
      },
      {
        title: '零食',
        id: '76',
        name: 'Snack',
        color: 'olive',
        icon: 'squarecheckfill'
      },
      {
        title: '饮料',
        id: '88',
        name: 'Drink',
        color: 'green',
        icon: 'roundcheckfill'
      },
    ],
  }
})