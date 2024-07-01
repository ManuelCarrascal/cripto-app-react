import CardForm from './CardForm';

export default function Hero() {
	return (
		<main className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-3 items-center h-full">
			<div className="flex items-center mx-8 justify-center">
				<h1 className="font-bold text-5xl  md:text-6xl text-balance text-custom-blue text-center md:text-left">
					Check the price of your cryptocurrencies in seconds with crypto app
				</h1>
			</div>
			<CardForm />
		</main>
	);
}
