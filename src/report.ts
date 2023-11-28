/**
 * 上报
 */
import { getSdkInfo } from './sdk'
import { getDeviceInfo } from './device'
import { ReportData, User, App, MonitorType } from './types'
interface ReportParams {
    type: MonitorType
    content: any
}
const app: App = {
    id: '',
    name: ''
}
const user: User = {
    id: '',
    name: ''
}
//* 注册基本信息 - app和user
const registorBasicInfo = ({ appId = '', appName = '', userId = '', userName = '' }) => {
    app.id = appId
    app.name = appName
    user.id = userId
    user.name = userName
}
const reportData = ({ type, content }: ReportParams): void => {
    const data: ReportData = {
        type: type,
        content: content,

        app: app,
        user: user,
        pageUrl: window.location.href,
        timestamp: Date.now(),
        timeCN: new Date().toLocaleString(),
        sdk: getSdkInfo(),
        device: getDeviceInfo(),
    }
    console.log('reportData', data)
    // navigator.sendBeacon('https://api.z.mumkey.com/api/system/loggerAdd', JSON.stringify(data))
}

export { registorBasicInfo, reportData }