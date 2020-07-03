/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
export const addTailoring = (array, payload) => {
	const itemExists = array.find(item => {
		return item.id === payload.id
	})

	if (itemExists) {
		return array.map(item => {
			if (item.id === payload.id) {
				return { ...item, count: item.count + 1 }
			}
			return item
		})
	}
	return [...array, { ...payload, count: 1 }]
}

export const deleteTailoring = (array, id) => {
	const itemExists = array.find(item => {
		return item.id === id
	})

	const count = itemExists.count - 1

	if (count) {
		return array.map(item => {
			if (item.id === id) {
				return { ...item, count: item.count - 1 }
			}
			return item
		})
	}

	return array.filter(a => a.id !== id)
}
export const addMarker = (array, payload) => {
	const colors = [
		'#E9954B',
		'#78AEBD',
		'#75B66D',
		'#AF7AC5',
		'#F7DC6F',
		'#F1948A',
		'#85C1E9',
		'#73C6B6',
	]
	const item = array[payload.index]
	item.marker = true
	if (!item.color) item.color = colors[Math.floor(Math.random() * 7)]
	item.coordinates = [{}]
	array[payload.index] = item
	return array
}

export const deleteMarker = (array, payload) => {
	const item = array[payload.index]
	item.marker = false
	array[payload.index] = item
	return array
}

export const addComment = (array, payload) => {
	const item = array[payload.index]
	item.coordinates[0].comment = payload.value
	array[payload.index] = item
	return array
}

export const addCoordinate = (array, payload) => {
	console.log(payload)
	payload.forEach(elem => {
		const item = array[elem.index]
		item.coordinates[0].x = elem.x
		item.coordinates[0].y = elem.y
		item.coordinates[0].index = elem.index
		array[elem.index] = item
	})
	return array
}

export const addTailoringItems = tailoring => {
	const array = []
	tailoring.forEach(item => {
		for (let i = 0; i < item.count; i++) {
			const object = { ...item }
			array.push(object)
		}
	})
	array.forEach(item => {
		item.count = 1
	})
	return array
}
