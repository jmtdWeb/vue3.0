/**
 * 用 export 把函数暴露出去才可以使用
 * import { textFunction } from './util/function.js';
 * 带{}括号
*/
export function a (){
    return 'pppppppp'
}
export function textFun (v){
    return v+'|'+a()
}
