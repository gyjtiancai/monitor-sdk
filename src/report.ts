const report = () => {
    console.log('report', JSON.stringify({content: "test"}))
    // navigator.sendBeacon('https://api.z.mumkey.com/api/system/loggerAdd', JSON.stringify({content: "test"}))
}

export { report }