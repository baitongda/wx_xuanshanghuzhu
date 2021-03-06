### 微信小程序--悬赏互助平台


### 开发背景
通过微信小程序接单或发布任务。
可惜小程序不允许临时会话而在小程序里私聊又不能在退出小程序后获得提醒，所以。。。。**项目没有实际使用价值**，可以使用html5或是直接开发原生应用。

### 参考资料
[微信小程序简易教程](https://developers.weixin.qq.com/miniprogram/dev/)
[微信API文档](https://developers.weixin.qq.com/miniprogram/dev/api/)
[小程序开发指南](https://developers.weixin.qq.com/ebook?action=get_post_info&token=935589521&volumn=1&lang=zh_CN&book=miniprogram&docid=0008aeea9a8978ab0086a685851c0a)


### 写给小白
1. `git pull`同步github的最新更改
2. `git add 文件名`添加你更改的文件
3. `git commit -m "说明"`提交你的更改
4. `git push`上传你的更改到github
5. `git status`提示你现在可以做的操作


## TODO
- [x] 登录（前端）--wqj
- [x] 登录（后端）--lyj
- [x] 显示首页任务列表（前端） --zsz
- [x] 显示首页任务列表（后端） --lxp
- [x] 首页帖子列表显示用户头像和昵称、浏览事件、分类显示（前端优化时间显示格式） --zsz
- [x] 首页帖子列表显示用户头像和昵称（后端）--lxp
- [x] 任务详情页包括回复（前端） --lxp
- [x] 任务详情页包括回复（后端）--lyj
- [x] 发布任务（前端）--wqj
- [x] 发布任务（后端）--lxp
- [x] 显示并更新我的信息（前端）--wqj
- [x] 显示并更新我的信息（后端）--lyj
- [x] 我的发布 可以删除帖子 --zsz
- [x] 我的发布（后端）--lyj
- [x] 我的消息 显示私聊消息（前端）--zsz
- [x] 我的消息（后端）--lxp
- [x] 我的接单 帖子详情增加接单按钮（前端）--lw
- [x] 我的接单（后端）--lyj
- [x] 我的收藏 可以取消收藏（前端）  --zsz
- [x] 我的收藏（后端）  --lyj
- [x] 帖子发布添加图片  --wqj
- [x] 帖子发布显示图片  --zsz
- [x] 缩小"我的"页面右箭头 --lxp
-  ~~[ ] 首先联系他跳转到私聊 --lxp~~ 
- [ ] 点击头像可以看到他的发帖，可以发私信
- [ ] 快捷支付功能
- [ ] 发布任务必须设置金额
- [ ] 可能存在多个人接单，比如Ａ接单后Ｂ并没有刷新页面，仍可能接单
- [ ] session安全验证
- [ ] 评论显示时间
- [ ] 可以长按自己的评论弹出删除的选项
- [ ] 评论可以发图片
- [ ] 增大发布任务允许的字数，并在输入的时候统计当前字数
- [ ] 下拉刷新
- [ ] 上拉加载
- [ ] 优化页面路由
- [ ] onShow时更新页面
- [ ] 用户反馈功能


## 部分页面说明

```plain
"pages": [
	"pages/index/index",
	"pages/add/add",
	"pages/profile/profile",                                          //'我的'Tab页
	"pages/person_info/person_info",                                  //'我的' --> '个人信息'
	"pages/item_detail/item_detail",                                  //'首页' 发布的信息
	"pages/profile_MyPublish/profile_MyPublish",                      //'我的' --> '我的发布'
	"pages/profile_info_username/profile_info_username",	          //'我的' --> '个人信息' --> '昵称'
	"pages/profile_info_phonenumber/profile_info_phonenumber",        //'我的' --> '个人信息' --> '手机号'
	"pages/profile_info_signature/profile_info_signature",		      //'我的' --> '个人信息' --> 'What's Up'
	"pages/profile_MyMessage/profile_MyMessage",					  //'我的' --> '我的消息'
	"pages/profile_MyOrder/profile_MyOrder",						  //'我的' --> '我的订单'
	"pages/profile_MyCollect/profile_MyCollect"						  //'我的' --> '我的收藏'
],
```

### 项目预览
<div text-align=center>
	<img width="150" src="http://p1f1jwe7c.bkt.clouddn.com/18-6-29/3783884.jpg"/>
	<img width="150" src="http://p1f1jwe7c.bkt.clouddn.com/18-6-29/19989831.jpg"/>
	<img width="150" src="http://p1f1jwe7c.bkt.clouddn.com/18-6-29/77650622.jpg"/>
	<img width="150" src="http://p1f1jwe7c.bkt.clouddn.com/18-6-29/18449371.jpg"/>
	<img width="150" src="http://p1f1jwe7c.bkt.clouddn.com/18-6-29/14755115.jpg"/>
	<img width="150" src="http://p1f1jwe7c.bkt.clouddn.com/18-6-29/78202889.jpg"/>
	<img width="150" src="http://p1f1jwe7c.bkt.clouddn.com/18-6-29/26101099.jpg"/>
	<img width="150" src="http://p1f1jwe7c.bkt.clouddn.com/18-6-29/70650192.jpg"/>
	<img width="150" src="http://p1f1jwe7c.bkt.clouddn.com/18-6-29/68555828.jpg"/>
</div>

