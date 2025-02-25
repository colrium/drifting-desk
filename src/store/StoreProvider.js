'use client'; // Ensure this is a Client Component

import { Provider } from 'react-redux';
import store from './store';

export default function StoreProvider({ children }) {
	return <Provider store={store}>{children}</Provider>;
}
