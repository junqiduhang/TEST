Page({

  /**
   * 页面的初始数据
   */
  data: {
    src : '/images/doge.png',
    name : "Hello World"
  },
  getMyInfo:function(e){
    let that = this
    wx.getUserProfile({
      desc:'正在获取',//不写不弹提示框
      success: function(res) {
        var userInfo = res.userInfo
        console.log(userInfo)
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
       that.setData({
          src : userInfo.avatarUrl,
          name : userInfo.nickName
       })
      }
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