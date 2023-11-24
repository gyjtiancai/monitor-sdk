//* JavaScript Error 
window.addEventListener('error', (error) => {
    //资源加载错误
    console.warn('JavaScript Error', error)
})
//* Promise Error
window.addEventListener('unhandledrejection', (error) => {
    console.warn('Promise Error', error);
},true)