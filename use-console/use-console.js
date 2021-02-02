import { useCallback, useState } from 'react';

/*
	Better log while debugging

	Problem: You are going to log a value, but you also want to find it easily in dev tool. 
	console.log itself is context agnostic. It means that you have to look for you log manualy.
	It would be hard sometimes if you are logging a lot of other stuff in dev tool.

	Solution: You just pass a context which is a simple string. Then your logs from now on are aware
	of the context

	Example:

		const console = useConsole({ context: 'Authentication' });

		console.log('User logged In'); // Authentication: User Logged In
		console.log('User Registered'); // Authentication: User Registered
		console.log('Token is not either valid or expired'); // Authentication: Token is not either valid or expired
		

*/
const useConsole = ({ context }) => {

	const [loggedValues, setLoggedValues] = useState([]);

	const concatValueWithContext = useCallback((context, value) => `${context}: ${value}`, []);

	const _log = useCallback((value) => {
		setLoggedValues(previous => [...previous, concatValueWithContext(context, value) ]);
		console.log(concatValueWithContext(context, value));
	}, []);

	const log = value => _log(value);

	return {
		loggedValues,
		log,
	};

};

export { useConsole };