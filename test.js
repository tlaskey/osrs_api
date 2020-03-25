'use strict'

const GrandExchange = require('./lib/Grand Exchange/items_api')

async function get_ge_item(item_id) {
    const ge = new GrandExchange()
    const response = await ge.get_item(item_id)
    console.log(response.statusCode)
    console.log(response.body)
}

get_ge_item(2)