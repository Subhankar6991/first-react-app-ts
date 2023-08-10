import { useState } from 'react';

export default function useArray(initialValue: any[]) {
	const [array, setArray] = useState(initialValue);
}
