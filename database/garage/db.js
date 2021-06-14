const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/garage');

const carsSchema = mongoose.Schema({
  brand: String,
  model: String,
  year: Number,
  date: { type: Date, default: Date.now },
})

const Car = mongoose.model('Car', carsSchema);



// const Benz = new Car({
//   brand: "Benz",
//   model: "S500",
//   year: 2021,
// });
//    Benz.save()

// const Porsche = new Car({
//   brand: "Porsche",
//   model: "Cayenne",
//   year: 2021,
// });
// Porsche.save()


const addCars = async () => {

  try {
    await Car.deleteMany({})

    await Car.insertMany([
      {
        brand: "Benz",
        model: "S500",
        year: 2021,
      },
      {
        brand: "Porsche",
        model: "Cayenne",
        year: 2021,
      },
      {
        brand: 'Aston Martin',
        model: "DB9",
        year: 2010
      },
      {
        brand: 'Range Rover',
        model: "Discovery Sport",
        year: 2017
      },
    ])
  }

  catch (err) {
    console.error(err)
  }
}

// addCars()




const findCarById = async () => {

  try {
    // const car = await Car.findOne({_id:"60c5166e510cf012f48bd048"})
    const car = await Car.findById("60c5166e510cf012f48bd045")
    console.log("findCar :", car);

  } catch (err) {
    console.error(err);
  }
}
// findCarById();


// Car.findOne({ year: 2017 }, function (err, doc){
// console.log(doc);
//     // doc.year = 2020;
//     // // doc.visits.$inc();
//     // doc.save();
//   });





// async function updateFunc() {

// const updateCar = await Car.update({ _id: "60c5c9930a36030de0b2636c" }, { year: 2020 })
//   return updateCar
// }
//  updateFunc();

const updateCArByID = async (newValues) => {

  try {
    const updateCar = await Car.findByIdAndUpdate("60c5c9930a36030de0b2636c", newValues)
    console.log("update Car :", updateCar);
    // return updateCar
  } catch (err) {
    console.error(err)
  }
}

// updateCArByID({year: 2021})





// async function deleteFunc() {

//   const deleteCar = await Car.deleteMany({ brand: "Aston Martin" })
//   return deleteCar
// }
// deleteFunc()

const deleteManyCars = async () => {

  try {
    await Car.deleteMany({ brand: "Benz" })
  } catch (err) {
    console.error(err)
  }

}
//  deleteManyCars()






// Car.insertMany([
//   { brand: 'Aston Martin', model: "DB9", year: 2010 },
//   { brand: 'Range Rover', model: "Discovery Sport", year: 2017 },

// ])
