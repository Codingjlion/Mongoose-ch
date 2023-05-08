require('dotenv').config()
const { MongoClient } = require('mongodb');

const mongoose = require("mongoose")
const { Person, personSchema } = require('./person');



mongoose.connect(process.env.MONGO_URI);
const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true });
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function () {
  console.log('MONGODB CONNECTED');

  
// const jay = new Person({
//      name: 'LION',
//      age: 10,
//      favoriteFoods: ['yam', 'egg' 'noodles'],
//    });
  const people = client.db("JLION").collection("people");
  //added in compass directly//
//   try {
//     await jay.save();
//     console.log('New person saved to database');
//   } catch (error) {
//     console.error(error);
//   }

  
//   try {
//     const persons = await Person.find({});
//     console.log('All persons in the database:', persons);
//   } catch (error) {
//     console.error(error);
//   }

  
//   try {
//     const person = await Person.findOne({ name: 'LION' });
//     console.log('Person found by name:', person);
//   } catch (error) {
//     console.error(error);
//   }

  
//   try {
//     const updatedPerson = await Person.findOneAndUpdate(
//       { name: 'LION' },
//       { age: 10 },
//       { new: true },
//       { bestfood: 'crab' }
//     );
//     console.log('Updated person:', updatedPerson);
//   } catch (error) {
//     console.error(error);
//   }
//   try {
    //const deletedPerson = await Person.findOneAndDelete({ name: 'LION' });
    //console.log('Deleted person:', deletedPerson);
//   } catch (error) {
//     console.error(error);
//   }
//   const id = '64386be8c0e896ffb68cac57'; 

//   try {
//     const Luna = await Person.findById(id);
//     console.log(Luna);
//   } catch (err) {
//     console.error(err);
//   };
  
//   try {
//     const personId = '64387ddfcde6613faf16ebc9';
//     const person = await Person.findById(personId);
//     if (person) {
//       person.favoriteFoods.push("crab");
//       await person.save();
//       console.log(person);
//     } else {
//       console.log(`Person with ID ${personId} not found.`);
//     }
//   } catch (err) {
//     console.error(err);
//   };
//   try {
//     const personName = 'Dan';
//     const updatedPerson = await Person.findOneAndUpdate(
//       { name: personName },
//       { age: 15 },
//       { new: true }
//     );
//     console.log(updatedPerson);
//   } catch (err) {
//     console.error(err);
//   };
// try {
//     const personId = '64387ebec393903a51e912ab';
//     const deletedPerson = await Person.findByIdAndRemove(personId);
//     console.log(deletedPerson);
//   } catch (err) {
//     console.error(err);
//   };
//   try {
//     const personId = '64387ebec393903a51e912ab';
//     const deletedPerson = await Person.findByIdAndRemove(personId);
//     if (!deletedPerson) {
//       console.log(`Person with _id ${personId} not found`);
//     } else {
//       console.log(`Person with _id ${personId} has been deleted`);
//     }
//   } catch (err) {
//     console.error(err);
//   };
// try {
//     const result = await Person.deleteMany({ name: "Grace" });
//     console.log(result);
//   } catch (err) {
//     console.error(err);
//   }
// try {
//     const result = await Person.find({ favoriteFoods: 'shawarma' })
//       .sort('name')
//       .limit(2)
//       .select('age')
//       .exec();
//     console.log(result);
//   } catch (err) {
//     console.error(err);
//   }
  
  
  
  

  
  // Close the database connection
//   db.close();
});
