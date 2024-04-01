/**
 * SDK
 */
import { Sdk } from "./types"
const getSdkInfo = (): Sdk => {
    return {
        version: '1.0.0',
        name: 'Monitor Sdk',
        description: '前端监控SDK',
        author: 'Ge YuJie'
    }
}

export {
    getSdkInfo
}
