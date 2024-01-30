// Team Members: Ethan Mingerink & Christopher Melbow
// Name: Ethan Mingerink
// Date: 1.22.2024
//Program: Maze
// Bolt ID: BODO

async function startProgram() {
	// start maze3
	await scrollMatrixText('Start',{ r:255,g:0,b:255}, 30, true)
	await speak ("Start Maze", true);
	setMainLed ({ r:255,g:0,b:255});
	// color 1
	await delay(2)
	setSpeed(100);
	await delay(1.50)
	stopRoll()
	setHeading(90)
	setMainLed({ r: 0, g: 0, b: 255})
	// sound 1
	setHeading(90)
	setSpeed(37)
	await delay(2.50)
	stopRoll()
	await Sound.EightBit.Error.play(true)
	// color 2
	setHeading(180)
	setSpeed(33)
	await delay(3.20)
	stopRoll()
	await delay(2)
	setHeading(220)
	await delay(2)
	setSpeed(25)
	await delay(4)
	stopRoll()
	setMainLed({ r: 255, g: 0, b: 0})
	// sound 2
	setHeading(120)
	setSpeed(30)
	await delay(2.05)
	stopRoll()
	setHeading(40)  
	setSpeed(35)
	await delay(1.77)
	stopRoll()
	await Sound.EightBit.SecretFound.play(true)
	//color three
	setHeading(120)
	setSpeed(35)
	await delay(1.25)
	stopRoll()
	setHeading(175)
	setSpeed(32.5)
	await delay(1.25)
	stopRoll()
	setMainLed({ r:0, g:255, b:0})
	setHeading(85)
	setSpeed(45)
	await delay(1.5)
	stopRoll()
	setHeading(0)
	setSpeed(50)
	await delay(1.5)
	stopRoll()
	
	
	
	
}