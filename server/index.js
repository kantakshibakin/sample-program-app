const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')
const FakeDb = require('./fake-db')

const productRoutes = require('./routes/products') 
// await mongoose.connect('mongodb+srv://test:testtest@cluster0.yevcx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const path = require('path')

mongoose.connect(config.DB_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true
    }).then (
        () => {
            if (process.env.NODE_ENV !== 'production') {
                const fakeDb = new FakeDb()
                //（必要に応じて）データベースの初期化を行う
                fakeDb.initDb()
            }
        }
    )


const app = express()

app.use('/api/v1/products', productRoutes)

if (process.env.NODE_ENV === 'production') {
    const appPath = path.join( __dirname, '..', 'dist', 'sample-program-app')
        app.use(express.static(appPath))
        app.get("*", function(req, res) {
        res.sendFile(path.resolve(appPath, 'index.html'))
    })
}
// app.get('/products', function(req, res){
//     res.json({'success' : true})
// })


/*PORTが読めないときは　3001 とする */
const PORT = process.env.PORT || '3001'

app.listen(PORT, function() {
    console.log('I am running!')
})


// mongodb+srv://test:<password>@cluster0.yevcx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority