// function validateEmail(email) {
// 	let re = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
// 	return re.test(email);
// }
function validateEmail(email) {
	var re =
		/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	return re.test(email);
}

export { validateEmail };
