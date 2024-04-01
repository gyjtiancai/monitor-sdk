/**
 * 错误
 */
import { reportData } from './report'
import { MonitorType } from './types'
const registerErrorMonitor = () => {
    //* JavaScript Error 
    window.addEventListener('error', (error: ErrorEvent) => {
        console.log('JavaScript Error', error)
        reportData({
            type: MonitorType.Error,
            subType: 'error',
            content: JSON.stringify({
                message: error.message,
                stack: error.error.stack
            })
        })
    })
    //* Promise Error
    window.addEventListener('unhandledrejection', (error) => {
        console.log('Promise Error', error)
        reportData({
            type: MonitorType.Error,
            subType: 'unhandledrejection',
            content: JSON.stringify({
                message: error.reason.message,
                stack: error.reason.stack
            })
        })
    })
}
//* Vue, React, Image, JavaScript等其余错误单独在项目中捕获
export default registerErrorMonitor