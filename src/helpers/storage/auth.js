import AsyncStorage from '@react-native-community/async-storage'
import http from '../../services/http'

export const getToken = async () => {
	const token = await AsyncStorage.getItem('@BUTLERS-Token')
	console.log(token)
	http.defaults.headers.Authorization = `Bearer ${token}`
	return token
}

export const getUser = async () => {
	const user = await AsyncStorage.getItem('@BUTLERS-User').then(value => JSON.parse(value))
	console.log(user)
	return user
}

export const setUser = async (user = getUser(), token = getToken()) => {
	await AsyncStorage.setItem('@BUTLERS-User', JSON.stringify(user))
	await AsyncStorage.setItem('@BUTLERS-Token', token)
	http.defaults.headers.Authorization = `Bearer ${token}`
}

export const deleteUser = async () => {
	await AsyncStorage.removeItem('@BUTLERS-User')
	await AsyncStorage.removeItem('@BUTLERS-Token')
	http.defaults.headers.Authorization = ''
}

export const updateUser = async user => {
	await AsyncStorage.setItem('@BUTLERS-User', JSON.stringify(user))
}
