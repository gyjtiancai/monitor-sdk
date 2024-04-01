enum MonitorType {
    Performance = 'Performance',
    Behavior = 'Behavior',
    Error = 'Error'
}
interface Sdk {
    version: string
    name: string
    description: string
    author: string
}
interface App {
    id: string | number
    name: string
    version: string
}
interface User {
    id: string | number
    name: string
}
interface Device {
    userAgent: string
    language: string
    onLine: boolean
    hardwareConcurrency: number
    geolocation?: GeolocationCoordinates
}

interface ReportData {
    type: MonitorType
    subType: string
    content: string
    pageUrl: string
    timestamp: number
    timeCN: string
    // app: App
    appId: string | number
    appName: string
    appVersion: string
    // user: User
    userId: string | number
    userName: string
    // sdk: Sdk
    sdkName: string
    sdkDescription: string
    sdkVersion: string
    sdkAuthor: string
    // device: Device
    deviceUserAgent: string
    deviceLanguage: string
    deviceOnLine: boolean
    deviceHardwareConcurrency: number
    deviceGeolocation?: GeolocationCoordinates
}

export {
    MonitorType,
    Sdk,
    App,
    User,
    Device,
    ReportData
}