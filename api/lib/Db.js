const mongoose = require('mongoose')
const Box = require('../models/Box')

const seedDb = async () => {
  console.info('Seeding Boxes')
  try {
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
    await mongoose.connection.dropCollection('boxes')

    await Box.insertMany([
      {
        name: 'Mark from Facebook',
        description: 'He found Facebook and bought other companies',
        imgSrc: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/31/21/mark-zuck.jpg?w968h681'
      },
      {
        name: 'Fracis the Pope',
        description: 'He likes radiohead, a lot',
        imgSrc: 'https://cruxnow.com/wp-content/uploads/2016/12/20160914T0844-5137-CNS-POPE-AUDIENCE-PRINCES-1024x675.jpg'
      },
      {
        name: 'Matt Groening',
        description: 'He created The Simpsons show',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Matt_Groening_by_Gage_Skidmore_2.jpg/1200px-Matt_Groening_by_Gage_Skidmore_2.jpg'
      }
    ])

    console.info('Database has been filled with data')
    process.exit(0)
  } catch (err) {
    console.error(`Fatal error; ${err}`)
    process.exit(1)
  }
}

seedDb()
