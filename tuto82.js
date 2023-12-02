// Searching for data in mongo db
// use VarmaKart

// This query will return all the objects with rating equal to 3.5

de.items.find({rating: 3.5})
db.items.find({rating: {$gte: 3.5}})
db.items.find({rating: {$gt: 3.5}})

// And Operator

db.items.find({rating:{$gt:3.5}, price: {$gt: 1000}})

db.items.find({rating: {$lt:4.5}, price: {$gt: 1000}})

db.items.find({$or: [{rating : {$gt :3}}, {price: {$gt: 1000}}]})

db.items.find({rating: {$gt: 2.5}}, {rating:1, quantity:1})
