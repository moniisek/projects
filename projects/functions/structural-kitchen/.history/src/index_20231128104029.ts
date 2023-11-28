// Write your createKitchen function here! ✨
type Stock = {
	breads: number;
	fruits: number;
	sauces: number;
	vegetables: number;
	[index: string]: number;
};
type Cleaner = (dirt: number, time?: number) => number;
type Supplier = (expense: number) => Stock;
type Recipe = (
	ingredients: Stock
) => { succeeded: false } | { succeeded: true; newStock: Stock };
type Kitchen = {
	announce: () => string;
	clean: (time?: number) => void;
	purchase: (expense: number) => boolean;
	prepare: (recipe: Recipe) => boolean;
};

export function createKitchen(
	budget: number,
	cleaner: Cleaner,
	supplier: Supplier
): Kitchen {
	let dirt = 0;
	let stock: Stock = {
		breads: 0,
		fruits: 0,
		sauces: 0,
		vegetables: 0,
	};

	return {
		announce: () =>
			`I have ${dirt} much dirt, ${budget} budget, ${stock.breads} bread(s), ${stock.fruits} fruit(s), ${stock.sauces} sauce(s), and ${stock.vegetables} vegetable(s).`,
		clean: (time) => {
			dirt = cleaner(dirt, time);
		},
		purchase: (expense) => {
			const isEnoughBudget = budget - expense > 0;
			if (isEnoughBudget) {
				const newStock = supplier(expense);
				const stockKeys = Object.keys(stock);
				for (const key of stockKeys) {
					stock[key] += newStock[key];
				}
			}
			return isEnoughBudget;
		},
		prepare: (recipe) => {
			const notDirty = dirt < 100;
			let recipeSuccess = false;
			if (notDirty) {
				const recipeResult = recipe(stock);
				if (recipeResult.succeeded) {
					stock = recipeResult.newStock;
				}
				recipeSuccess = recipeResult.succeeded;
			}
			return notDirty && recipeSuccess;
		},
	};
}
// You'll need to export it so the tests can run it.
