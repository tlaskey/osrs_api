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
}

module.exports = GrandExchange
