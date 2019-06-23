export default async function() {
	const result = await setTimeout(() => {
		console.log('You should await me!');
		return true;
	}, 5000);
	return result ? true : false;
}