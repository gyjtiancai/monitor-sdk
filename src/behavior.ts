/**
 * 用户行为
 */
import { reportData } from './report'
import { MonitorType } from './types'
const registerBehaviorMonitor = () => {
    //* dom事件监听
    // window.addEventListener('click', (event: any) => {
    //     reportData({
    //         type: MonitorType.Behavior,
    //         content: {
    //             type: 'click',
    //             tag: event.target.tagName,
    //             dom: event.target.outerHTML
    //         }
    //     })
    // })

    //* #/hash变化监听
    let currentHash = window.location.hash;
    let enterTime = Date.now(); // 记录进入当前哈希的时间
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOMContentLoaded')
        currentHash = window.location.hash;
        enterTime = Date.now();
    });
    //* path变化监听(浏览器前进和后退)
    window.addEventListener('popstate', () => {
        console.log('hashchange', window.location.href);
        const leaveTime = Date.now(); // 离开当前哈希的时间
        const stayDuration = leaveTime - enterTime; // 计算停留时间

        console.log(`在 ${currentHash} 停留了 ${stayDuration} 毫秒`);
        reportData({
            type: MonitorType.Behavior,
            content: {
                type: 'hashchange',
                page: `${window.location.origin}${window.location.pathname}${currentHash}`,
                stayDuration: stayDuration
            }
        })
        // 更新当前哈希和进入时间
        currentHash = window.location.hash;
        enterTime = Date.now();
    });
    window.addEventListener('hashchange', () => {
        console.log('hashchange', window.location.href);
        const leaveTime = Date.now(); // 离开当前哈希的时间
        const stayDuration = leaveTime - enterTime; // 计算停留时间

        console.log(`在 ${currentHash} 停留了 ${stayDuration} 毫秒`);
        reportData({
            type: MonitorType.Behavior,
            content: {
                type: 'hashchange',
                page: `${window.location.origin}${window.location.pathname}${currentHash}`,
                stayDuration: stayDuration
            }
        })
        // 更新当前哈希和进入时间
        currentHash = window.location.hash;
        enterTime = Date.now();

    });
    window.addEventListener('beforeunload', () => {
        const leaveTime = Date.now();
        const stayDuration = leaveTime - enterTime;

        console.log(`在 ${currentHash} 停留了 ${stayDuration} 毫秒`);
        reportData({
            type: MonitorType.Behavior,
            content: {
                type: 'beforeunload',
                page: `${window.location.origin}${window.location.pathname}${currentHash}`,
                stayDuration: stayDuration
            }
        })
    });
}
export {
    registerBehaviorMonitor
}