// use varmaKart

// show collections

db.items.find({price:10000})

// Deleting items from Mongo Database

db.items.deleteOne({price: 10000})
// deleteOne() will delete the matching document entry and will delete the first entry in case of multi document match

db.items.deleteMany({price:10000})
// deleteMany() will delete all the documents which are matching the filter object


