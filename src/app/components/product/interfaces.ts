export interface IProduct {
	id: string;
	title: string;
	price: number;
	image: string;
	quantity?: number;
}

export interface IButton {
  isAdded?: boolean;
};