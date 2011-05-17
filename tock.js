(function() {

    var TickTock = function(obj) { 
        return new wrapper(obj); 
    }

    var root = this; 
    TickTock.isBefore = function(time, callback) {
        if(this.getTime() < time.getTime()) {
            if(typeof callback == 'function') {
                return callback();
            } else {
                return true;
            }
        } 
        return false;
    }

    TickTock.isDuring = function(start, end, callback) { 
        if(this.getTime() > start.getTime() && this.getTime() < end.getTime()) {
            if(typeof callback == 'function') {
                return callback();
            } else {
                return true;
            }
        } 
        return false;
    }

    TickTock.isAfter = function(time, callback) {
        if(this.getTime() > time.getTime()) {
            if(typeof callback == 'function') {
                return callback();
            } else {
                return true;
            }
        } 
        return false;
    }

    TickTock.setTimeOfDay = function(hour, minute, second) {
        this.setHours(hour || 0);
        this.setMinutes(minute || 0);
        this.setSeconds(second || 0);
        return this;
    }
    
    TickTock.addMinutes = function(val) {
        var minute = 60000;
        
        this.setTime(this.getTime() + (val * minute));
        return this;
    }

    TickTock.addHours = function(val) {
        var minute = 60000,
            hour = minute * 60;

        this.setTime(this.getTime() + (val * hour));
        return this;
    }

    TickTock.addDays = function(val) {
        var minute = 60000,
            hour = minute * 60,
            day = hour * 24;

        this.setTime(this.getTime() + (val * day));
        return this;
    }

    var wrapper = function(obj) {
        for(item in TickTock) {
            if(TickTock.hasOwnProperty(item)) {
                obj.constructor.prototype[item] = TickTock[item];
            }
        }

        return obj;
    }

    root['TickTock'] = TickTock;
})();
