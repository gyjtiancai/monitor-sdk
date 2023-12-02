import { registerPerformanceMonitor } from './performance'
import { registerJavaScriptErrorMonitor, registerPromiseErrorMonitor } from './error'
import { registerBehaviorMonitor } from './behavior'
import { registorBasicInfo, reportData } from './report'
registorBasicInfo({ appId: 'Monitor SDK', appName: '前端监控SDK', userId: 'Ge YuJie', userName: '葛宇杰' })
registerPerformanceMonitor()
registerJavaScriptErrorMonitor()
registerPromiseErrorMonitor()
registerBehaviorMonitor()
const test = () => {
    const createImage = () => {
        const image = new Image()
        image.src = 'xxx.xxx'
        document.body.append(image)
    }
    const createScript = () => {
        const script = document.createElement('script')
        script.src = 'xxx.xxx'
        document.head.append(script)
    }
    const testJavaScriptError = () => {
        throw Error('test')
    }
    const testPromiseError = async () => {
        return new Promise<void>((resolve) => {
            throw Error('Promise')
        })
    }
    setTimeout(() => {
        testJavaScriptError()
    }, 3000)
    setTimeout(() => {
        testPromiseError()
    }, 5000)
}
// test()