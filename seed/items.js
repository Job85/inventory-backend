const db = require('../db')
const { Item } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const items = [
        {
            location: 'demo location',
            category: 'demo category',
            item_name: 'demo item',
            description: 'demo description',
            unit_measure: 'demo measure',
            case_size: 'demo case size',
            vendor_name: 'demo vendor',
            vendor_code: 'demo code'
        },
        {
            location: 'test location',
            category: 'test category',
            item_name: 'test item',
            description: 'test description',
            unit_measure: 'test measure',
            case_size: 'test case size',
            vendor_name: 'test vendor',
            vendor_code: 'test code'
        },
        {
            location: 'trial location',
            category: 'trial category',
            item_name: 'trial item',
            description: 'trial description',
            unit_measure: 'trial measure',
            case_size: 'trial case size',
            vendor_name: 'trial vendor',
            vendor_code: 'trial code'
        }
    ]

    await Item.insertMany(items)
    console.log('Created items with inventories')
}

const run = async () => {
    await main()
    db.close()
}

run()