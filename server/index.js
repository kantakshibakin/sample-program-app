const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const FakeDb = require('./fake-db')

const productRoutes = require('./routes/products') 
// await mongoose.connect('mongodb+srv://test:testtest@cluster0.yevcx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

mongoose.connect(config.DB_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
    }).then (
        () => {
            const fakeDb = new FakeDb()
            fakeDb.initDb()
        }
    )


const app = express()

app.use('/api/v1/products', productRoutes)

// app.get('/products', function(req, res){
//     res.json({'success' : true})
// })

/*PORTが読めないときは　3001 とする */
const PORT = process.env.PORT || '3001'

app.listen(PORT, function() {
    console.log('I am running!')
})


// mongodb+srv://test:<password>@cluster0.yevcx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority