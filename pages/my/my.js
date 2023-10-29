// pages/my/my.js.
// var common=require('../../utils/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  
 },
  getMyInfo:function(e){
    let info=e.detail.userInfo;
    this.setData({
      isLogin:true,
      src:info.avatarUrl,
      nickName:info.nickName
    })
    this.getMyFavorites();
  },
  getUserInfo(){
    let that = this
    wx.getUserProfile({
    desc: 'desc',
    success(res){
    console.log(res.userInfo)//这里可以在控制台输出用户信息
    res = res.userInfo
    that.setData({
    isLogin : true,
    src : res.avatarUrl,//设置用户头像
    nickName : res.nickName//设置用户昵称
    })
    }
    })
    },
    getMyFavorites(){
      let info = wx.getStorageInfoSync()//获取本地缓存信息
      let keys = info.keys //获取全部key信息
      let num = keys.length //获取收藏新闻数量
      let myList = []
      for(var i = 0;i < num;i++){
      let obj = wx.getStorageSync(key[i])
      myList.push(obj)//将新闻添加到新闻数组中
      }
      this.setData({
      newsList:myList,//更新我的收藏新闻列表
      num:num
      })
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
  onLoad(options) {

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
    if(this.data.isLogin){
      this.getMyFavorites()
    }
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