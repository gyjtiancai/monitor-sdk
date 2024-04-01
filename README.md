## Web监控SDK
### 使用
```js
// 安装
npm install @geyj/monitor-sdk
// 引入
import { registorMonitor, reportData, MonitorType } from '@geyj/monitor-sdk'
```
### 说明
#### 1.registorMonitor
注册监控，说明：

注册位置应在应用程序入口文件中

注册时机应在app挂载之前
```js
import { registorMonitor } from '@geyj/monitor-sdk'
registorMonitor({
  appId: 'appId',       //应用程序id
  appName: 'appName',   //应用程序名称
  appVersion: '1.0.0',  //应用程序版本
  userId: 'userId',     //用户id
  userName: 'userName', //用户名称
  useBehavior: true,    //是否开启行为监控
  useError: true,       //是否开启异常监控
  usePerformance: true  //是否开启性能监控
})
```
#### 2.reportData
数据上报，以vue-router守卫上报停留时长为例
```js
import { MonitorType, reportData } from '@geyj/monitor-sdk'
let time = Date.now()
router.beforeEach((to, from, next) => {
    const duration = Date.now() - time
    time = Date.now()
    reportData({
        type: MonitorType.Behavior,  //监控类型枚举
        subType: 'page_stay_time',   //子类型 - 自定义
        content: JSON.stringify({    //内容 - 自定义
            from: from.path,
            to: to.path,
            duration,
            unit: 'ms',
        })
    })
    next()
})
```