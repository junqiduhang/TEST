// index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dream : ""
  },
  getDream(e){
    app.globalData.dream = e.detail.value
    console.log(app.globalData.dream)
  },
  gameStart(){
    var random = Math.floor(Math.random() * 10 );
    while(random < 3){
        random = Math.floor(Math.random() * 10 );
    }
    app.globalData.travel_time = random
    console.log("旅行时间",app.globalData.travel_time)
    wx.navigateTo({
      url: '/pages/run/run',
    })
  },  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.globalData.isGet = true
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