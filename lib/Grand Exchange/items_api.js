'use strict'

const client = new (require('../../../reqi'))()

class GrandExchange {
    async get_item(item_id) {
        try {
            const response = await client.get(`http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=${item_id}`)
            return response
        } catch(err) {
            console.error(err)
        }
    }
}

module.exports = GrandExchange