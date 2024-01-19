//Programmer: Ethan Mingerink
//Date: 1.10.2024
//Program: Sphero Bolt Testing
//Bolt ID:

/*
async function startProgram() {
	await speak("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(60);
	await delay (2);
	setSpeed(0);

}
*/

//Squar w/ diffrent cplors for each line
async function startProgram() {
	setMainLed({ r: 40, g: 2, b: 255})
	setSpeed(100);
	await delay (8)
	setMainLed({ r: 85, g: 54, b: 255})
	await roll(270, 100, 4)
	setMainLed({ r: 0, g: 128, b: 255})
	await roll(180, 100, 9)
	setMainLed({ r: 0, g: 197, b: 255})
	await roll(90, 100, 4.25)
	setMainLed({ r: 0, g: 255, b: 232})
	await roll(360, 100, 0.5)
	await delay (0.5)
	stopRoll()
}





// Square W/ different Color & Sounds for each line





//Figure 8