// pages/detail/detail.js
var common = require('../../utils/common.js') //引用公共JS文件
Page({

  /**
   * 页面的初始数据
   */
  data: {

    },
    goToDetail(e){
      //获取携带的data-id数据
      let id = e.currentTarget.dataset.id;
      //携带新闻ID进行页面跳转
      //?后面加参数名 + 后面为传递的参数值
      wx.navigateTo({
      url : '../detail/detail?id=' + id
      })
      },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id
    //检查当前新闻是否在收藏夹中
    var article = wx.getStorageSync(id)
    //已存在
    if(article != ""){
    this.setData({
    article:article,
    isAdd:true
    })
    }
    else{
    //common.js文件为我们提供了根据新闻编号查询新闻的接口
    let result = common.getNewsDetail(id)
    if(result.code == '200'){
    this.setData({
    article:result.news,
    isAdd : false
    })
    }
    }
    },
    addFavorites(options){
    let article = this.data.article
    wx.setStorageSync(article.id, article);
    this.setData({
    isAdd : true
    })
    },
    cancalFavorites :function(){
    let article = this.data.article
    wx.removeStorageSync(article.id)
    this.setData({isAdd:false})
    },
   

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})