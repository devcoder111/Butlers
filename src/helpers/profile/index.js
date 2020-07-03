/* eslint-disable no-undef */
import { Platform } from 'react-native'

export const createFormData = photo => {
	const data = new FormData()

	data.append('file', {
		uri: Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
		type: photo.type,
		name: photo.fileName,
	})
	return data
}

export const createTailoringData = photo => {
	const data = new FormData()

	data.append('file', {
		uri: Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
		type: photo.type,
		name: photo.fileName,
	})
	return data
}

export const createMessageImageData = photo => {
	const data = new FormData()

	data.append('file', {
		uri: Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
		type: photo.type,
		name: photo.fileName,
	})
	return data
}
