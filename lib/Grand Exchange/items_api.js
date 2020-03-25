'use strict'

const client = new (require('../../../reqi'))()

class GrandExchange {
  async getItem (itemID) {
    try {
      const response = await client.get(`http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=${itemID}`)
      return response
    } catch (err) {
      console.error(err)
    }
  }

  parseItemBody(resBody) {
      const item = resBody["item"]
      console.log(item)
      console.log('Name:', item['name'], 'Description:', item['description'])
  }
}

module.exports = GrandExchange
