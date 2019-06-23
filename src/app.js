import hello from './module';

async function welcome() {
	const result = await hello();
	console.log(result);
}

welcome();