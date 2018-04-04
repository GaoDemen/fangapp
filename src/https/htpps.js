/**
 * User: demen
 *
 */
 
import axios from 'axios';
// 导入配置文件 配置文件就导入的请求的前缀地址
import dataurl from './config'
import qs from "qs"
 
 
// 这是一个饿了么的弹框
// import { Toast } from 'element-ui';
import { Toast } from 'mint-ui';
//路由配置
import router from '@/router'
 
/**
 * 封装的全局ajax请求
 */
 
class Axios{
  // constructor (){
  //   this.init();
  // };
 
  /**
   * 初始化
   */
  // init(){
  //   axios.defaults.baseURL = url;
  // };
//   _setUserInfo(data){
//     // 把请求的数据存入vuex
//     store.commit('setUserInfo',data);
//   }
 
  /**
   * 判断是否是登录
   * @param url
   * @returns {boolean}
   * @private
   */
//   _isLogin(url){
     
//     if(url != '/app/login'){
//       axios.defaults.headers = {'x-token': store.state.user.user.token.token};
//       return false;
//     }else{
//       return true;
//     }
//   }
 
  /**
   * 判断是否返回数据
   * @param data 接收到的数据
   * @returns {boolean}
   * @private
   */
  // _isStatus(data){
  //   if(data.code == 100){
  //     router.push('/login');
  //     Toast.error(data.Toast || '请重新登录！');
 
  //     return false
  //   }else{
  //     return true
  //   }
 
  // }
 
  /**
   * 全局错误处理
   * @param data 传入错误的数据
   * @private
   */
  _error(data){
    console.log(data)
    Toast.error('网络错误！');
  }
 
  /**
   * GET 请求 {es6解构赋值}
   * @param type 包含url信息
   * @param data 需要发送的参数
   * @returns {Promise}
   * @constructor
   */
  HttpGet(url,data) {
    // console.log(dataurl)
    // 创建一个promise对象
    // this._isLogin(url)
    this.promise = new Promise((resolve, reject)=> {
      axios.get(dataurl.url+url,{params:data})
        .then((data) => {
        // console.log(data)
          // if(this._isStatus(data.data)){
            resolve(data.data);
          // }
        })
        .catch((data) =>{
          this._error(data);
        })
    })
    return this.promise;
  };
 
  /**
   * POST 请求
   * @param type Object 包含url信息
   * @param data Object 需要发送的参数
   * @param urlData Object 需要拼接到地址栏的参数
   * @returns {Promise}
   * @constructor
   */
  HttpPost(url,Data,urlData){
 
    // 判断是否加头部
    // this._isLogin(url);
    // 创建一个promise对象
    this.promise = new Promise((resolve, reject)=> {
      for(const item in urlData){
        url += '/' + urlData[item];
      };
      axios.post(dataurl.url+url,qs.stringify(Data))
        .then((data) => {
 
          // 是否请求成功
          // if(this._isStatus(data.data)){
            // 是否需要存数据
            // if(this._isLogin(url)){
              // this._setUserInfo(data.data)
            // };
            resolve(data.data)
          // };
        })
        .catch((data) =>{
          this._error(data);
        })
    })
    return this.promise;
  };
};
export default new Axios();