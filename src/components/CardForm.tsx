import { ChangeEvent, FormEvent, useState } from 'react';
import { currencies } from '../data';
import { useCryptoStore } from '../store';
import { Pair } from '../types';
import { toast } from 'react-toastify';
import CryptoPriceDisplay from './CryptoPriceDisplay';

export default function CardForm() {
	const cryptoCurrencies = useCryptoStore((state) => state.cryptoCurrencies);
	const fetchData = useCryptoStore((state) => state.fetchData);

	const [pair, setPair] = useState<Pair>({
		currency: '',
		cryptocurrency: '',
	});

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setPair({
			...pair,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (Object.values(pair).includes('')) {
			toast('All fields are required', {
				type: 'error',
				position: 'bottom-right',
			});
			return;
		}
		fetchData(pair);
	};

	return (
		<div className='flex flex-col items-center shadow-md  py-6 rounded-lg bg-white px-4 -mt-10 m-auto md:mt-auto'>
			<form
				className=" flex flex-col gap-3"
				onSubmit={handleSubmit}
			>
				<div className="flex flex-col max-w-xs">
					<label htmlFor="currency">Currency:</label>
					<select
						name="currency"
						id="currency"
						className="border border-gray-400 rounded-md p-1"
						value={pair.currency}
						onChange={handleChange}
					>
						<option
							value=""
							disabled
						>
							select your local currency
						</option>
						{currencies.map((currency) => (
							<option
								value={currency.code}
								key={currency.code}
							>
								{currency.name}
							</option>
						))}
					</select>
				</div>
				<div className="flex flex-col max-w-xs">
					<label htmlFor="cryptocurrency">Cryptocurrency:</label>
					<select
						name="cryptocurrency"
						id="cryptocurrency"
						className="border border-gray-400 rounded-md p-1"
						value={pair.cryptocurrency}
						onChange={handleChange}
					>
						<option
							value=""
							disabled
						>
							select a cryptocurrency
						</option>
						{cryptoCurrencies.map((cryptocurrency) => (
							<option
								key={cryptocurrency.CoinInfo.Name}
								value={cryptocurrency.CoinInfo.Name}
							>
								{cryptocurrency.CoinInfo.FullName}
							</option>
						))}
					</select>
				</div>
				<input
					type="submit"
					value="Consult"
					className="shadow py-1 px-3 bg-gray-200 rounded-sm cursor-pointer input-hover-animate max-w-full"
				/>{' '}
			</form>
			<CryptoPriceDisplay />
		</div>
	);
}
