var car1 = {
    name: 'Reno Stapway',
    isTurrOn: false,
    speed: 0,
    engine: {
        v: 1.6,
        horsesPower: 120
        
    },
    start: function() {
        this.isTurrOn = true;
        this.speed = 10;
        this.engine.isTurrOn = true;
        
    }
};

