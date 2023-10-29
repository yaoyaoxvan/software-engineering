// pages/index/index.js
// const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //幻灯片素材
    swiperImg: [
      {src: 'https://img0.baidu.com/it/u=1026923030,3494044096&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=426'},
      {src: 'https://img1.baidu.com/it/u=203349754,1154832002&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=308'},
      {src: 'https://img1.baidu.com/it/u=728852538,488451285&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=426'}
    ]
  },
  navigateToLogs1: function() {
    wx.navigateTo({
      url: '/pages/index/index'
    })
  },
  navigateToLogs2: function() {
    wx.navigateTo({
      url: '/pages/index_2/index_2'
    })
  },
  navigateToLogs3: function() {
    wx.navigateTo({
      url: '/Sokoban/index/index'
    })
  },
  navigateToLogs4: function() {
    wx.navigateTo({
      url: '/pages/week_plan/week_plan'
    })
  },
  /**
   * 自定义函数--跳转新页面浏览新闻内容
   */
  goToDetail: function(e) {
    //获取携带的data-id数据
    let id = e.currentTarget.dataset.id;
    //携带新闻id进行页面跳转
    wx.navigateTo({
      url: '../detail/detail?id=' + id
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //获取新闻列表
    // let list = common.getNewsList()
    //更新列表数据
    // this.setData({
    //   newsList: list
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})