/**
 * 设备信息
 */
import { Device } from "./types"
const getDeviceInfo = (): Device => {
    return {
        //* navigator.userAgent = appCodeName/appVersion number (Platform; Security; OS-or-CPU;Localization; rv: revision-version-number) product/productSub Application-Name Application-Name-version
        //* navigator.userAgent = Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36
        userAgent: navigator.userAgent,
        language: navigator.language,
        onLine: navigator.onLine,
        hardwareConcurrency: navigator.hardwareConcurrency
    }
}

export {
    getDeviceInfo
}
