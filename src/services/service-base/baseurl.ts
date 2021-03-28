// @description {baseUrl} 基础路由环境

const getBaseUrl = (): string => {
  let BASE_URL: string = ''

  process.env.NODE_ENV === 'development'
    // ? BASE_URL = 'http://172.16.105.154:5001/gde/api/v1'
    ? BASE_URL = 'https://gateway-v1-test.360huzhubao.com'
    // 生产环境
    : BASE_URL = 'https://gateway-v1-test.360huzhubao.com'

  return BASE_URL 
}


export default getBaseUrl