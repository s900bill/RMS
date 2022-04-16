import axios, { AxiosRequestConfig } from 'axios';

//全域性配置
axios.defaults.baseURL = "http://127.0.0.1:3000/api";
axios.defaults.timeout = 5000;


//攔截器
axios.interceptors.request.use(config => {
    return config
}, (error) => {
    return Promise.reject(error)
})
axios.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response){
        switch (error.response.status) {
          case 404:
            console.log("你要找的頁面不存在")
            // go to 404 page
            break
          case 500:
            console.log("程式發生問題")
            // go to 500 page
            break
          default:
            console.log(error.message)
        }
      } 
      if (!window.navigator.onLine) {
        alert("網路出了點問題，請重新連線後重整網頁");
        return;
      }
    return Promise.reject(error)
})
//  function(url = (''), params = {}, type = 'POST') {
//     //設定 url params type 的預設值
//     return new Promise((resolve, reject) => {
//         let promise  = new Promise(()=>{});
//         if (type.toUpperCase() === 'GET') {
//             promise = axios({
//                 url,
//                 params
//             })
//         } else if (type.toUpperCase() === 'POST') {
//             promise = axios({
//                 method: 'POST',
//                 url,
//                 data: params
//             })
//         }
//         //處理返回
//         promise.then((res:any) => {
//             resolve(res)
//         }).catch((err:any) => {
//             reject(err)
//         })
//     })}


// 此處的instance為我們create的實體
export default function(method="post", url='', data:any, config?: AxiosRequestConfig<null> | undefined) {
  
    return new Promise((resolve, reject) => {
        method = method.toLowerCase();
        let promise  = new Promise(()=>{});
        switch (method) {
          case "post":
            promise= axios.post(url, data, config);
            break;
          case "get":
            promise= axios.get(url, { params: data });
            break;
          case "delete":
            promise= axios.delete(url, { params: data });
            break;
          case "put":
            promise= axios.put(url, data);
            break;
          case "patch":
            promise= axios.patch(url, data);
            break;
          default:
            console.log(`未知的 method: ${method}`);
            break;
    
        }
           //處理返回
            promise.then((res:any) => {
                resolve(res)
            }).catch((err:any) => {
                reject(err)
            })
    });
  }

