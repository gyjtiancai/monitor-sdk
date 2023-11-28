/**
 * SDK
 */
import { Sdk } from "./types"
const getSdkInfo = (): Sdk => {
    return {
        version: '1.0.0',
        name: 'Monitor Sdk',
        description: '前端监控',
        author: 'Ge YuJie'
    }
}

export {
    getSdkInfo
}
