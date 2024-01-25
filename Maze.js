// Team Members: Ethan Mingerink & Christopher Melbow
// Name: Ethan Mingerink
// Date: 1.22.2024
//Program: Maze
// Bolt ID: BODO

async function startProgram() {
	// start maze 
	await scrollMatrixText('Start',{ r:255,g:0,b:255}, 30, true)
	await speak ("Start Maze", true);
	setMainLed ({ r:255,g:0,b:255});
	await delay(2)
	setSpeed(100);
	await delay(1.37)
	stopRoll()
	setHeading(90)
	setMainLed({ r: 0, g: 0, b: 255})
	setHeading(90)
	setSpeed(37)
	await delay(2.50)
	stopRoll()
	await Sound.EightBit.Error.play(true)
	
			   
}