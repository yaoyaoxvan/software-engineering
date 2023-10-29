Page({

  /**
   * 页面的初始数据
   */
  data: {
    levels:[
      'pic01.jpg',
      'pic02.jpg',
      'pic03.jpg',
      'pic04.jpg',
      'pic05.jpg',
      'pic06.jpg',
    ]
  },
  // 自定义函数--游戏选关
  chooseLevel:function(e){
    let level =e.currentTarget.dataset.level
    wx.navigateTo({
      url:'../game/game?level='+level
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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