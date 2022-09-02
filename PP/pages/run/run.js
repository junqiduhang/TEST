// pages/run/run.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
    imgUrls: [
        "cloud://qicloud-6gp4wllie1cfc6cf.7169-qicloud-6gp4wllie1cfc6cf-1311982804/rain.jpg",
        "cloud://qicloud-6gp4wllie1cfc6cf.7169-qicloud-6gp4wllie1cfc6cf-1311982804/field.jpg"
        ],
        indicatorDots: false,  //是否显示面板指示点
        autoplay: true,      //是否自动切换
        interval: 5000,       //自动切换时间间隔
        duration: 1000,       //滑动动画时长
        inputShowed: false,
        inputVal: "",

        starttime : 0,
        event : "",
        endtime : 0,
        timeLag : 0,
        duration : 0
        
    },
    getEvent(){
        let that = this
        const db = wx.cloud.database().collection("events")
        console.log("从云端获取数据")
        db.get({
            success(res){
                console.log("查询成功",res.data)
                that.setData({
                    events : res.data
                })
            },
            fail(e){
                console.log("查询失败",e)
            }
        })
    },
    read(){
        var that=this;
        var count = Math.floor(app.globalData.travel_time%5)
        var ans = 0
        var gameEvent = setInterval(function(){
            //生成随机事件，两类三种
            if(Math.random() > 0.3){
                count = Math.floor(app.globalData.travel_time%5)
                var index = Math.max(0,Math.floor(Math.random()*that.data.events.length-1))
                var event = that.data.events[index]
                console.log(index)
                if(event.out > 0){
                    app.globalData.travel_time += event.out
                    console.log("增加时间",event.out)
                    event ="事件：" + event.name + ",所以时间+" + event.out + "s"
                }
                else{
                    app.globalData.travel_time += event.out
                    console.log("减少",event.out)
                    event ="事件：" + event.name + ",所以时间" + event.out + "s"
                }
            }
            else{
                event = "平安无事哦，所以时间变化为0s" 
            }
            //输出当前旅行时间
            console.log("当前旅行时间",app.globalData.travel_time)
            that.setData({
                event : event
            })
            //判断是否跳出随机事件生成
            var curtime=new Date().getTime()
            var starttime = that.data.starttime
            if((curtime-starttime)/1000 > app.globalData.travel_time){
                clearInterval(gameEvent);
                that.setData({
                    event : "you get it!"
                })
                return
            }
            if(ans == count-1 || app.globalData.travel_time < 0){
                clearInterval(gameEvent);
                app.globalData.travel_time = -1
                that.setData({
                    event : "you get it!"
                })
                return
            }
            ans++
        },3000)
        
    },
    startTime(e){
        this.data.donghua.rotate(120*10000).step()
        this.setData({
            donghua : this.data.donghua.export()
        })
        console.log(e)
        var starttime=new Date().getTime()
        this.setData({
            starttime : starttime
        })
        console.log("开始触摸按钮",this.data.starttime)
        this.read()
    },
    endTime(e){
        console.log(e)
        var endtime=new Date().getTime()
        this.setData({
            endtime : endtime
        })
        this.data.timeLag = Math.floor(this.data.endtime-this.data.starttime)/1000
        console.log("结束触摸按钮",this.data.endtime)
        console.log("触摸按钮持续时间s",this.data.timeLag)
        console.log("需要持续时间s", app.globalData.travel_time)
        if(this.data.timeLag <= app.globalData.travel_time){
            app.globalData.isGet = false
            console.log("fail")
        }
        else{
            console.log("success")
            app.globalData.isGet = true
        }
        wx.redirectTo({
          url: '/pages/end/end',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getEvent()
        this.data.duration = app.globalData.travel_time
        var duration = this.data.duration
        this.data.donghua = wx.createAnimation({
          duration: duration*1000000
        })
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