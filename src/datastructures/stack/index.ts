export class Stack<T> {
	private data: T[] = [];

	/* Add a node in O(1) time. */
	push(node: T): void {
		this.data.push(node);
	}

	/* Remove the last inserted node in O(1) time and return it, or undefined if there are no nodes remaining. */
	pop(): T | undefined {
		return this.data.pop();
	}

	/* Return the number of elements in the stack in O(1) time. */
	size(): number {
		return this.data.length;
	}
}
