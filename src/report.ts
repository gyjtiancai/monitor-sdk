/**
 * 上报
 */
import registerPerformanceMonitor from './performance'
import registerErrorMonitor from './error'
import registerBehaviorMonitor from './behavior'
import {
    MonitorType,
    Sdk,
    App,
    User,
    Device,
    ReportData
} from './types'

import { getSdkInfo } from './sdk'
import { getDeviceInfo } from './device'

let app: App = {
    id: '',
    name: '',
    version: ''
}
let user: User = {
    id: '',
    name: ''
}
let sdk: Sdk = getSdkInfo()
let device: Device = getDeviceInfo()
//* 注册Monitor
const registorMonitor = ({
    appId = '',
    appName = '',
    appVersion = '',
    userId = '',
    userName = '',
    usePerformance = true,
    useError = true,
    useBehavior = true
}) => {
    app = {
        id: appId,
        name: appName,
        version: appVersion
    }
    user = {
        id: userId,
        name: userName
    }
    sdk = getSdkInfo()
    device = getDeviceInfo()
    if (usePerformance) {
        registerPerformanceMonitor()
    }
    if (useError) {
        registerErrorMonitor()
    }
    if (useBehavior) {
        registerBehaviorMonitor()
    }
    console.log('Register Monitor Successfully')
}
const reportData = ({ type, subType, content }: { type: MonitorType, subType: string, content: string }): void => {
    const data: ReportData = {
        type,
        subType,
        content,
        pageUrl: window.location.href,
        timestamp: Date.now(),
        timeCN: new Date().toLocaleString(),
        // app: app,
        appId: app.id,
        appName: app.name,
        appVersion: app.version,
        // user: user,
        userId: user.id,
        userName: user.name,
        // sdk: getSdkInfo(),
        sdkName: sdk.name,
        sdkDescription: sdk.description,
        sdkVersion: sdk.version,
        sdkAuthor: sdk.author,
        // device: getDeviceInfo(),
        deviceUserAgent: device.userAgent,
        deviceLanguage: device.language,
        deviceOnLine: device.onLine,
        deviceHardwareConcurrency: device.hardwareConcurrency,
        deviceGeolocation: device.geolocation
    }
    console.log('reportData', data)
    fetch('http://localhost:3000/log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    // navigator.sendBeacon('http://localhost:3000/log', JSON.stringify(data))
}

export { registorMonitor, reportData }