export function pickRandomItem<T>(items: T[]): T {
	const idx = generateRandomIdx(items.length);
	return items[idx];
	// --------
	function generateRandomIdx(length: number): number {
		return Math.floor(Math.random() * length);
	}
}
