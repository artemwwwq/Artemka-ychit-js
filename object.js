let chevy = {
  make: "Chevy",
  model: " Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  convertible: false,
  mileage: 1021,

  started: false,
  fuel: 0,

  start: function () {
    if (this.fuel == 0) {
        alert("The car is on empty, fill up before starting!");
    } else {
        this.started = true;
    }
  },
  stop: function () {
    this.started = false;
  },
  drive: function () {
    if (this.started) {
      if (this.fuel > 0) {
        alert(this.make + " " + this.model + " goes zoom zoom!");
        this.fuel = this.fuel - 1;
      } else {
        alert("Uh oh, out of fuel.");
        this.stop();
      }
    } else {
      alert("You need to start the engine first.");
    }
  },
  addFuel: function (amount) {
    this.fuel = this.fuel + amount;
  },
};

let cadi = {
  make: "Cadillac",
  model: " Gold Maria",
  year: "1955",
  color: "tan",
  passengers: 5,
  convertible: false,
  mileage: 12892,

  started: false,
  start: function () {
    this.started = true;
  },
  stop: function () {
    this.started = false;
  },
  drive: function () {
    if (this.started) {
      alert(this.make + "" + this.model + " goes zoom zoom!");
    } else {
      alert("You need to start the engine first.");
    }
  },
};

let taxi = {
  make: "Webville Motors",
  model: " Taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: true,
  mileage: 281341,

  started: false,
  start: function () {
    this.started = true;
  },
  stop: function () {
    this.started = false;
  },
  drive: function () {
    if (this.started) {
      alert(this.make + "" + this.model + " goes zoom zoom!");
    } else {
      alert("You need to start the engine first.");
    }
  },
};

function prequal(car) {
  if (car.mileage > 10000) {
    return false;
  } else if (car.year > 1960) {
    return false;
  }
  return true;
}

let autoRU = prequal(chevy);
if (autoRU) {
  console.log("you gotta check out this " + taxi.make + "" + taxi.model);
} else
  console.log("You should really pass on the " + taxi.make + "" + taxi.model);



  chevy.start();
  chevy.drive();
