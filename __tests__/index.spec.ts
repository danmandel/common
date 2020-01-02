import { quicksort } from '../src/';
test('It sorts an array', () => {
  const input = [5,4,1,0,9,99,10,100,2];
  const solution = [0, 1, 10, 100, 2, 4, 5, 9, 99];
	 expect(quicksort(input))
	.toEqual(solution);
});
