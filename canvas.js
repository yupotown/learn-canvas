
var context; // context
var width = 640, height = 480;
var x, y, w, h;
var dx, dy;

// マウスのクライアント座標
var mouseX, mouseY;

function run() {
	var canvas = document.getElementById('main-canvas');
	if (canvas.getContext) {
		context = canvas.getContext('2d');

		x = 100;
		y = 100;
		w = 32;
		h = 32;
		dx = 2;
		dy = 0;

		// 入力イベント
		canvas.addEventListener('click', click, true);
		canvas.addEventListener('mousemove', move, true);
		window.addEventListener('keydown', keydown, true);

		// 33[ms]ごとに render を実行
		setInterval(render, 33);
	}
}

function render() {
	context.fillStyle = 'rgb(0, 0, 0)';
	context.fillRect(0, 0, width, height);

	context.strokeStyle = 'rgb(255, 128, 128)';
	context.fillStyle = 'rgb(255, 0, 0)';
	context.fillRect(x, y, w, h);

	context.fillStyle = 'rgb(255, 255, 0)';
	context.fillRect(mouseX - 2, mouseY - 2, 4, 4);

	x += dx;
	y += dy;
}

// クリック時の処理
function click(event) {
	var rect = event.target.getBoundingClientRect();
	x = event.clientX - rect.left - w / 2;
	y = event.clientY - rect.top - h / 2;
}

// マウス移動時の処理
function move(event) {
	var rect = event.target.getBoundingClientRect();
	mouseX = event.clientX - rect.left;
	mouseY = event.clientY - rect.top;
}

// キー押下時の処理
function keydown(event) {
	var code = event.keyCode;

	switch (code) {
	case 37: // left
		dx -= 1;
		break;
	case 39: // right
		dx += 1;
		break;
	}
}