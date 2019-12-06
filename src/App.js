import React, { useState } from 'react'
import { ContextProvider } from "./Store"
import { products } from "./constants/data"

import AppRouter from './components/AppRouter';

function App() {
	const [contextData, setContextData] = useState({
		data: {
			products: products.map(product => ({ ...product, addedToCart: false }))
		},
		updateData: data => setContextData({ ...contextData, data: data })
	});

	return (
		<ContextProvider value={contextData}>
			<AppRouter />
		</ContextProvider>
	);
}

export default App;
