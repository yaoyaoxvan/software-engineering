// logs.js


Page({
  data: {
    logs: []
  },
  toGenus:function(event){
    wx.navigateTo({
      url: urlto
    })
  },
  goToDetail: function(e) {
    //获取携带的data-id数据
    let id = e.currentTarget.dataset.id;
    //携带新闻id进行页面跳转
    wx.navigateTo({
      url: '../detail/detail?id=' + id
    })
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          // date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  }
})
