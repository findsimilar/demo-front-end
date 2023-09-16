import { writable } from 'svelte/store';

function createInput(default_value) {
	const { subscribe, set } = writable(default_value);

	return {
		subscribe,
        set,
		reset: () => set(default_value)
	};
}


export const text = createInput("")
export const texts = createInput("")
export const separator = createInput(',')


