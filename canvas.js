
var ctx; // context
var width = 640, height = 480;
var x, y;

function run() {
	var canvas = document.getElementById('main-canvas');
	if (canvas.getContext) {
		ctx = canvas.getContext('2d');

		x = 100;
		y = 100;

		// 33[ms]ごとに render を実行
		setInterval(render, 33);
	}
}

function render() {
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.fillRect(0, 0, width, height);

	ctx.strokeStyle = 'rgb(255, 128, 128)';
	ctx.fillStyle = 'rgb(255, 0, 0)';
	ctx.fillRect(x, y, 32, 32);

	x += 2;
}
