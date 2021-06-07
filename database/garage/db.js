const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/garage');

const carsSchema = mongoose.Schema({
    brand: String,
    model:   String,
    year: Number,
    date: { type: Date, default: Date.now },
  })

  const Car = mongoose.model('Car', carsSchema);

  const Benz = new Car({
    brand: "Benz",
    model:   "S500",
    year: 2021,
  });
  //  Benz.save()
  
  const Porsche = new Car({
      brand: "Porsche",
      model:   "Cayenne",
      year: 2021,
    });


    Porsche.save()