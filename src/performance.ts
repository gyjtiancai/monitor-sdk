/**
 * 性能
 */
import { reportData } from './report'
const registerPerformanceMonitor = () => {
    new PerformanceObserver((entryList) => {
        //* 白屏
        const entrys = entryList.getEntries();
        for (const entry of entrys) {
            if (entry.name === 'first-contentful-paint') {
                console.log('白屏时间: ', entry.startTime, '毫秒');
                reportData({
                    type: 'Performance',
                    content: {
                        type: 'white_screen_time',
                        time: entry.startTime
                    }
                })
            }
        }
        //* 资源加载情况
        const resources = performance.getEntriesByType("resource");
        resources.forEach((resource) => {
            if (resource.duration > 100) {
                console.log('资源: ' + resource.name);
                console.log('加载时间: ' + resource.duration + '毫秒');
                reportData({
                    type: 'Performance',
                    content: {
                        type: 'resource_load_time',
                        name: resource.name,
                        time: resource.duration
                    }
                })
            }
        });
    }).observe({ type: 'paint', buffered: true });
}
export {
    registerPerformanceMonitor
}
/**
 * observe({type, buffered, entryTypes})
 * @type { string }这个属性用于过滤性能条目的特定类型。它是一个字符串，用于指定单一的性能条目类型，比如 "paint" 或 "resource"。这个选项通常用于监听新引入的性能条目类型，它的优先级高于 entryTypes。
 * @buffered { boolean } 用于指定是否应该接收观察者创建之前已经记录的性能条目。如果设置为 true，观察者将接收旧的性能条目（例如，在页面加载期间发生的条目）
 * @entryTypes {[ {'mark(标记)' | 'measure(测量)' | 'frame(帧)' | 'navigation(导航)' | 'paint(绘制)' | 'resource(资源)' | 'longtask(任务)' | 'markRaw' | 'measureRaw' | 'frameRaw' | 'navigationRaw' | 'paintRaw' | 'resourceRaw' | 'longtaskRaw'}]}
 */
//* 