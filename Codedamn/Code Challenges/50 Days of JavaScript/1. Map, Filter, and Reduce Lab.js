// Implement the myMap, myFilter, and myReduce functions

// myMap function
const myMap = (array, callback) => {
	const mappedArray = []

	for (const element of array) {
		mappedArray.push(callback(element))
	}

	return mappedArray
}

// myFilter function
const myFilter = (array, callback) => {
	const filteredArray = []

	for (const element of array) {
		if (callback(element)) {
			filteredArray.push(element)
		}
	}

	return filteredArray
}

// myReduce function
const myReduce = (array, callback, initialValue = null) => {
	let result = array[0]

	if (initialValue != null) {
		result = callback(initialValue, array[0])
	}

	for (let i = 1; i < array.length; i++) {
		result = callback(result, array[i])
	}

	return result
}

// Export the functions
export { myMap, myFilter, myReduce }
