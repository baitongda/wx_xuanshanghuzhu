### 微信小程序--悬赏互助平台

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
- [ ] 登录（前端）
- [ ] 登录（后端）
- [ ] 显示首页任务列表（前端）
- [ ] 显示首页任务列表（后端）
- [ ] 任务详情页包括回复（前端）
- [ ] 任务详情页包括回复（后端）
- [ ] 发布任务（前端）
- [ ] 发布任务（后端）
- [ ] 显示并更新我的信息（前端）
- [ ] 显示并更新我的信息（后端）
- [ ] 我的发布（前端）
- [ ] 我的发布（后端）
- [ ] 我的消息（前端）
- [ ] 我的消息（后端）
- [ ] 我的收藏（前端）
- [ ] 我的收藏（后端）



## 页面说明

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


