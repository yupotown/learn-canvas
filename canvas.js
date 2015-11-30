
function run() {
	var canvas = document.getElementById('main-canvas');
	if (canvas.getContext) {
		var context = canvas.getContext('2d');

		context.strokeStyle = 'rgb(255, 128, 128)';
		context.fillStyle = 'rgb(255, 0, 0)';
		context.fillRect(100, 100, 200, 200);
	}
}
