Page({

  /**
   * 页面的初始数据
   */
  data: {
    ContactInfos: [{
      name: "称呼*",
      placeholder: "请输入称呼",
      formName: "name"
    },
    {
      name: "手机号",
      placeholder: "请输入手机号",
      formName: "phone"
    },
    {
      name: "微信号",
      placeholder: "请输入微信号",
      formName: "wxNumber"
    }],
    PinCheInfos: [{
      name: "出发地点*",
      placeholder: "限7个字",
      formName: "sourcePlace",
      url:"../map/map"
    },
    {
      name: "目的地*",
      placeholder: "限7个字",
      formName: "destinationPlace"
    },
    {
      name: "空座数*",
      placeholder: "请输入空座数",
      formName: "seat"
    },
    {
      name: "单程（元）",
      placeholder: "请输入单程价格",
      formName: "money"
    },
    {
      name: "途径地",
      placeholder: "请用空格隔开",
      formName: "path"
    },
    {
      name: "车型",
      placeholder: "请输入车型",
      formName: "carType"
    },
    {
      name: "出发时间",
      placeholder: "",
      formName: "startTime"
    },
    {
      name: "返程时间",
      placeholder: "",
      formName: "endTime"
    },
    {
      name: "日期",
      placeholder: "长期拼车可不填",
      formName: "tempDate"
    }],
    remark:{
      formName: "remark"
    }
  },

  formSubmit: function (e) {
    console.log(e.detail.value)
    /**wx.request({
      url: "https://gpm0qcbp.qcloud.la/weapp/login",
      method: "POST",
      data: e.detail.value,
      header:{
        'Content-Type':'application/json'
      },
      success:function(res){
        console.log(res);
      }
    })**/
    var carFindPeoples=wx.getStorageSync("carFindPeople")||[]
    carFindPeoples.unshift(e.detail.value)
    wx.setStorageSync("carFindPeople", carFindPeoples);
    
    
  },

  clearStorage:function(){
    wx.clearStorage();
  },

  navigateToMap:function(){
    wx.navigateTo({
      url: '../map/map'
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