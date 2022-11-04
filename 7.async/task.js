class AlarmClock {
	constructor() {
		this.alarmCollection = []
		this.timerId = null
	}
	
	addClock(time, callback, id) {
		if(!id) throw new Error( 'Error: невозможно индетифицировать будильник. Параметр id не передан' )
		
		if(this.alarmCollection.some((item) => item.id === id)) {
			console.error('Звонок с таким id ${id} уже сушествует');
			return;
		}
		
		this.alarmCollection.push({id, time, callback})
		
	}
	
	removeClock(id) {
		this.alarmCollection = this.alarmCollection.filter(item => item.id !== id)
	}
	
	getCurrentFormattedTime() {
		let date = new Date();
		let hours = date.getHours() < 10 ? `${'0' +date.getHours()}` : date.getHours()
		let min = date.getMinutes() < 10 ? `${'0' +date.getMinutes()}` : date.getMinutes()
		return `${hours}:${min}`
	}
	
	start() {
		
		function checkClock(alarm) {
			if(alarm.time === this.getCurrentFormattedTime()) alarm.callback();
		}
		let checkAlarm = checkClock.bind(this);
		if(!this.timerId) this.timerId = setInterval(() => this.alarmCollection.forEach(item => checkAlarm(item)), 1000)
	}
	
	stop() {
		if(this.timerId) {
			clearInterval(this.timerId)
			this.timerId = null
		}
	}
	
	printAlarms() {
		this.alarmCollection.forEach(alarm => console.log(`id ${alarm.id} time ${alarm.time}`))
	}
	
	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}

clock = new AlarmClock()
clock.addClock("16:45", f => f, 1);
clock.addClock("16:45", f => f, 2);
clock.removeClock(1);
console.log(clock);
console.log(clock.getCurrentFormattedTime());
console.log(clock.printAlarms());


clock.start();
clock.stop();

// clock.clearAlarms();