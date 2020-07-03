import axios from 'axios'

const baseUrl = 'http://buttler.tk'
// const baseUrl = 'http://buttler.local' // Need to input after backend deploy
// const baseUrl = 'https://www.buttler.tk'
const http = axios.create({
	// baseURL: `${baseUrl}/api/v1`,
	baseURL: `${baseUrl}/mobile/v1`,
})

http.interceptors.request.use(request => {
	console.log('Starting Request', request)
	return request
})

export default http
