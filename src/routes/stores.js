import { writable } from 'svelte/store'
//import { get_similars } from './core'

function createInput(default_value) {
	const { subscribe, set } = writable(default_value)

	return {
		subscribe,
        set,
		reset: () => set(default_value)
	};
}

export const text = createInput("")
export const texts = createInput("")
export const default_separator = ','
export const separator = createInput(default_separator)
export const remove_stopwords = createInput(true)
export const language = createInput('english')
export const count = createInput(10)
//export const result_similars = writable([])

// export async function find_similar() {
// 	console.log($text)
//     const text_list = $texts.split($separator)
//     return get_similars(
// 		$text, 
// 		text_list,
// 		$remove_stopwords,
// 		$language,
// 		$count
// 		)
//   }