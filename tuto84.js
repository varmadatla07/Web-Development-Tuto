// show dbs 

// use VarmaKart

// show collections

db.items.updateOne({name:"Moto C"}, {$set: {price:2}})

db.items.updateMany({name:"MotoC"}, {$set: {price: 2, rating: 2}})