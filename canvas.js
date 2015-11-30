
var context; // context
var width = 640, height = 480;
var x, y, w, h;

function run() {
	var canvas = document.getElementById('main-canvas');
	if (canvas.getContext) {
		context = canvas.getContext('2d');

		x = 100;
		y = 100;
		w = 32;
		h = 32;

		// 入力イベント
		canvas.addEventListener('click', click, true);

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

	x += 2;
}

// クリック時の処理
function click(event) {
	var rect = event.target.getBoundingClientRect();
	x = event.clientX - rect.left - w / 2;
	y = event.clientY - rect.top - h / 2;
}
