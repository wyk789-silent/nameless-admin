// @ts-ignore
import Cookies from 'js-cookie'

// const TokenKey = 'Access-Token'//后端存登陆信息的

export function getToken(TokenKey:string) {
    return Cookies.get(TokenKey)
}

export function setToken(TokenKey:string,token:string) {
    return Cookies.set(TokenKey, token)
}

export function removeToken(TokenKey:string) {
    return Cookies.remove(TokenKey)
}
