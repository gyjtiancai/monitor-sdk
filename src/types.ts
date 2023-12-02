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
    app: App
    user: User
    content: any
    pageUrl: string
    timestamp: number
    timeCN: string
    sdk: Sdk
    device: Device
}

export {
    MonitorType,
    Sdk,
    App,
    User,
    Device,
    ReportData
}