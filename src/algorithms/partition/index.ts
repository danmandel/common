/**
 * A function that reorders the array so that all elements with values less than the pivot come before it
 * and elements with values greater than the pivot come after it.
 * @param  {String} name
 * @param  {String='hello'} greeting
 * @returns String
 */
export const partition: Function = (array: number[], left: number = 0, right: number = array.length - 1): number => {
	const pivot: number = array[Math.floor((right + left) / 2)];
	let i: number = left;
	let j: number = right;

	while (i <= j) {
		while (array[i] < pivot) i++;
		while (array[j] > pivot) j--;
		if (i <= j) {
			[array[i], array[j]] = [array[j], array[i]];
			i++;
			j--;
		}
	}

	return i;
};
