/**
 * 用户行为
 */
import { reportData } from './report'
const registerBehaviorMonitor = () => {
    window.addEventListener('click', (event: any) => {
        reportData({
            type: 'Behavior',
            content: {
                type: 'Click',
                tag: event.target.tagName,
                dom: event.target.outerHTML
            }
        })
    })
}
export {
    registerBehaviorMonitor
}