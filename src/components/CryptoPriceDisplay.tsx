import { useMemo } from 'react';
import { useCryptoStore } from '../store';
import Spinner from './Spinner';

export default function CryptoPriceDisplay() {
	const result = useCryptoStore((state) => state.result);
	const loading = useCryptoStore((state) => state.loading);
	const hasResult = useMemo(
		() =>
			Object.values(result).some(
				(value) => value !== '' && value !== null && value !== undefined
			),
		[result]
	);

	return (
		<>
			{loading ? (
				<Spinner />
			) : (
				hasResult && (
					<div className="mt-3 flex border-4 w-full rounded-xl items-center">
						<>
							<img
								src={`https://cryptocompare.com/${result.IMAGEURL}`}
								alt=""
								width={50}
							/>
							<div className="flex flex-col py-3 px-4 ">
								<p>
									The price is:{' '}
									<span className="font-semibold text-lg">{result.PRICE}</span>
								</p>
								<p>
									Daily Max:{' '}
									<span className="font-semibold text-lg">
										{result.HIGHDAY}
									</span>
								</p>
								<p>
									Daily Min:{' '}
									<span className="font-semibold text-lg">{result.LOWDAY}</span>
								</p>
								<p>
									24h Variation:{' '}
									<span className="font-semibold text-lg">
										{result.CHANGEPCT24HOUR}
									</span>
								</p>

								<p className="self-end text-green-800 mt-2 border-2 border-green-700 rounded-md p-1 ">
									{result.LASTUPDATE}
								</p>
							</div>
						</>
					</div>
				)
			)}
		</>
	);
}
