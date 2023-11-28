import './performance'
import { registerPerformanceMonitor } from './performance'
import { registerJavaScriptErrorMonitor, registerPromiseErrorMonitor } from './error'
import { registerBehaviorMonitor } from './behavior'
import { registorBasicInfo, reportData } from './report'

export {
    registerPerformanceMonitor,
    registerJavaScriptErrorMonitor,
    registerPromiseErrorMonitor,
    registerBehaviorMonitor,
    registorBasicInfo,
    reportData
}
