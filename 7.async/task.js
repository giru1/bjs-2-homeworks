class AlarmClock {
	constructor() {
		this.alarmCollection = []
		this.timerId = null
	}
	
	addClock(time, callback, id) {
		if(!id) throw new Error( 'Error: невозможно индетифицировать будильник. Параметр id не передан' )
		
		if(this.alarmCollection.includes(id)) {
			console.error(`Звонок с таким id ${id} уже сушествует`);
			return;
		}
		
		this.alarmCollection.push({id, time, callback})
		
	}
	
	removeClock(id) {
		this.alarmCollection = this.alarmCollection.filter()
	}
	
	getCurrentFormattedTime() {
		return null
	}
	
	start() {
	
	}
	
	stop() {
	
	}
	
	printAlarms() {
	
	}
	
	clearAlarms() {
	
	}
}

alarm = new AlarmClock()