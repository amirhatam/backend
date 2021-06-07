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
//    Benz.save()
  
  const Porsche = new Car({
      brand: "Porsche",
      model:   "Cayenne",
      year: 2021,
    });
    // Porsche.save()



    // Car.findOne({ year: 2021 }, function (err, doc){
    // console.log(doc);
    //     // doc.year = 2020;
    //     // // doc.visits.$inc();
    //     // doc.save();
    //   });


  async function updateFunc (){

      const updateCar = await Car.update({_id:"60be305659d99c745001025c"}, {year:2020})
   }

   updateFunc();