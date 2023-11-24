//1.性能监控
window.addEventListener('load', function () {
    //页面加载时间
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    console.log('页面加载时间:', loadTime);
    //资源加载情况
    const resources = performance.getEntriesByType("resource");
    resources.forEach(function (resource) {
        console.log('资源名称:', resource.name);
        // console.log('响应时间:', resource.responseEnd - resource.startTime);
    });
});