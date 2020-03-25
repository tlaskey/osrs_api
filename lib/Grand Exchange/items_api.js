'use strict'

const client = new (require('reqi'))()

class GrandExchange {
  async getItem (itemID) {
    try {
      const response = await client.get(`http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=${itemID}`)
      return response.body
    } catch (err) {
      console.error(err)
    }
  }

  parseItemBody(resBody) {
    const parsed = JSON.parse(resBody)
    const item = parsed.item
    const parsedString = item.name + ': ' + item.description
    return parsedString
  }
}

module.exports = GrandExchange
