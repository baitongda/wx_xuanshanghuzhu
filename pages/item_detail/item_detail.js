// pages/item_detail/item_detail.js
const app = getApp()
Page({

    data: {
        height: 20,
        focus: false,
        content: '',
        list: [{}],
        releaseFocus: false,
        userInfo: {},
        hasUserInfo: false,
        post_id: '',
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        // detail: [],
        post_info: {},   //文章信息    
        comments: [],      //评论
        collectionStatus:0  //收藏状态


    },

//更改收藏状态
    changeCollectionStatus: function (event) {
      var url = 'https://api.admination.cn/restful/index.php/collection/' + getApp().globalData.openid + '/' + event.target.dataset.postid
      console.log(url)
      var that = this
      wx.request({
        url: url,
        data: {
        },
        header: {
          'content-type':
          'application/json'
        },
        success: function (res) {
          console.log("change collectionStatus success")
          console.log(res)
        },
        fail: function (res) {
          console.log("change collect fail");
        }
      })
    },


//接单函数
  acceptOrder:function(e){

    var url = 'https://api.admination.cn/restful/index.php/order/' + getApp().globalData.openid + '/' + e.target.dataset.postid
    console.log(url)
    var that = this
    wx.request({
      url: url,
      data: {
      },
      header: {
        'content-type':
        'application/json'
      },
      success: function (res) {
        console.log("accept order success")
        wx: wx.switchTab({
          url: '/pages/index/index',
          success: function (res) { },
          fail: function (res) { },
          complete: function (res) { },
        })
        wx.showToast({
          title: '接单成功',
          icon: 'succes',
          duration: 1500,
          mask: true,
        })
        console.log(res)
      },
      fail: function (res) {
        console.log("acceot order fail");
      }
    })

  },



    bindTextAreaBlur: function (e) {
        this.setData({
            content: e.detail.value,
        })

    },
    RequestData: function (e) {
        console.log(this.data.post_info.comments);
    },
    /**
     * 页面的初始数据
     */
    add_after: function (e) {
        var that = this
        var parentid = 0
        /**判断是不是本人评论 */
        if (that.data.post_info.service_id == getApp().globalData.openid) {
            parentid = -1
        }
        else {
            parentid = 3
        }
        /**上传 */
        wx.request({
            url: 'https://api.admination.cn/restful/index.php/comment/' + that.data.post_id,
            method: "POST",
            data: {
                service_id: getApp().globalData.openid,
                parent_service_id: that.data.post_info.service_id,
                parent_id: parentid,
                content: that.data.content
            },

            header: {
                "Content-Type": "application/json"
            },
            success: function (res) {
                // that.onLoad()
                console.log(res);
            },
            fail: function () {
                console.log('detail request fail')
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;//在success回调函数中this已经改变为当前对象，所以要拷贝一份到that里
        wx.request({
            url: 'https://api.admination.cn/restful/index.php/posts/' + options["post_id"],
            success: function (res) {
                var res_content = res.data[0]["publish_time"];
                console.log(res.data[0]["publish_time"]);
                res.data[0].publish_time = res_content.substring(5, 16)
                console.log(res.data[0]);
                that.setData({
                    // <<<<<<< HEAD
                    post_id: options["post_id"],
                    post_info: res.data[0],
                    comments: res.data[0]["comments"]
                })
                //                 console.log(res);
                // =======
                //                   post_info: res.data[0],
                //                   comments: res.data[0]["comments"]
                //                 })
                // >>>>>>> c80ee695ef377b817fe31900dd05648263ef39ac
            },
            fail: function () {
                console.log('detail request fail')
            }
        })
    },
    /**
    * 点击回复 通过releaseFocus来判断是回复帖子还是回复人
    */
    bindReply: function (e) {
        this.setData({
            releaseFocus: true,
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
