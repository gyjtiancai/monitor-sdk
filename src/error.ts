/**
 * 错误
 */
import { reportData } from './report'
import { MonitorType } from './types'
const registerJavaScriptErrorMonitor = () => {
    //* JavaScript Error 
    window.addEventListener('error', (error: ErrorEvent) => {
        reportData({
            type: MonitorType.Error,
            content: {
                type: 'error',
                message: error.message,
                stack: error.error.stack
            }
        })
    })
}
const registerPromiseErrorMonitor = () => {
    //* Promise Error
    window.addEventListener('unhandledrejection', (error) => {
        reportData({
            type: MonitorType.Error,
            content: {
                type: 'unhandledrejection',
                message: error.reason.message,
                stack: error.reason.stack
            }
        })
    })
}
//* Vue, React, Image, JavaScript等其余错误单独在项目中捕获
export {
    registerJavaScriptErrorMonitor,
    registerPromiseErrorMonitor
}