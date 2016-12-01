/*
	global
		process
			argv
*/

/*
	猜拳游戏：
		一执行脚本，随机生成一个值【1，2，3】
		等待用户输入【1，2，3】
		比较用的输入和电脑的值得出结果
		结束
*/

// 用来保存计算机随机生成的值
var computerValue;

init();

console.log('请输入数字，1代表剪刀，2代表石头，3代表布');

function init()
{
	computerValue = getComputerValue();
	// 运行到这里时，程序应该停下来，等待用户输入
	process.stdin.on('readable', function () {
		var userValue = process.stdin.read();
		if (userValue !== null) {
			userValue = parseInt(userValue.toString());
			console.log('computerValue = '+computerValue);
			switch (computerValue) {
				case 1:
					switch (userValue) {
						case 1:
							process.stdout.write('平手了');
							break;
						case 2:
							process.stdout.write('你赢了');
							break;
						case 3:
							process.stdout.write('暂时让电脑赢了');
							break;
						default:
							process.stdout.write('没结果');
					}
					break;
				case 2:
					switch (userValue) {
						case 1:
							process.stdout.write('暂时让电脑赢了');
							break;
						case 2:
							process.stdout.write('平手了');
							break;
						case 3:
							process.stdout.write('你赢了');
							break;
						default:
							process.stdout.write('没结果');
					}
					break;
				case 3:
					switch (userValue) {
						case 1:
							process.stdout.write('你赢了');
							break;
						case 2:
							process.stdout.write('暂时让电脑赢了');
							break;
						case 3:
							process.stdout.write('平手了');
							break;
						default:
							process.stdout.write('没结果');
					}
					break;
				/*default:
					process.stdout.write('没有命中');
					break;*/
			}


			process.stdin.end();
		}
	});
}

function getComputerValue()
{
	return Math.ceil(Math.random() * 3);
}
