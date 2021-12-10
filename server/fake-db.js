const Product = require('./model/product')

class FakeDb {
    constructor() {
        this.products = [
            {
                coverimage:"./assets/img/phone-cover.jpg",
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                title1: '特徴',
                description1: 'Phone XLの特徴の説明が入ります',
                title2: '性能',
                description2: 'Phone XLの性能の説明が入ります',
                title3: '外観',
                description3: 'Phone XLの外観の説明が入ります',
            },
            {
                coverimage:"./assets/img/4938614_s.jpg",
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                title1: '特徴',
                description1: 'Phone Miniの特徴の説明が入ります',
                title2: '性能',
                description2: 'Phone Miniの性能の説明が入ります',
                title3: '外観',
                description3: 'Phone Miniの外観の説明が入ります',
            },
            {
                coverimage:"./assets/img/f_section.jpg",
                name: 'Phone Standard',
                price: 999,
                description: 'A great phone with one of the best window',
                title1: '特徴',
                description1: 'Phone Standardの特徴の説明が入ります',
                title2: '性能',
                description2: 'Phone Standardの性能の説明が入ります',
                title3: '外観',
                description3: 'Phone Standardの外観の説明が入ります',
            },
            {
                coverimage:"./assets/img/5145162_s.jpg",
                name: 'Phone Upgrade',
                price: 1200,
                description: 'A great phone with one of the best size',
                title1: '特徴',
                description1: 'Phone Upgradeの特徴の説明が入ります',
                title2: '性能',
                description2: 'Phone Upgradeの性能の説明が入ります',
                title3: '外観',
                description3: 'Phone Upgradeの外観の説明が入ります',
            }
        ]
    }

    async initDb () {
        await this.cleanDb()
        this.pushProductsToDb()
    }

    async cleanDb() {
        await Product.deleteMany({})
    }

    pushProductsToDb () {
        this.products.forEach (
           (product) => {
               const newProduct = new Product(product)
               newProduct.save()
           } 
        )
    }

    // seeDb() {
    //     this.pushProductsToDb()
    // }

}
module.exports = FakeDb
