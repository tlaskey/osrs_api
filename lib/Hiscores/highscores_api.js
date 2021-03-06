'use strict'

const { GAMEMODES, HISCORES } = require('../constants')
const client = new (require('reqi'))()

class Hiscores {
  async getPlayer (playerName, gameMode = 'main') {
    try {
      const response = await client
        .get(`https://secure.runescape.com/m=hiscore_oldschool${GAMEMODES[gameMode]}/index_lite.ws?player=${playerName}`)
      return response.body
    } catch (err) { console.error(err) }
  }

  parseHiscores (playerName, resBody, category) {
    const hiscoresArray = resBody.split(/\r?\n/)
    const arrayCategory = hiscoresArray[HISCORES[category]]
    const categoryArray = arrayCategory.split(',')
    const parsedString = playerName + ': ' + category + ': ' + 'rank ' + categoryArray[0] + ' level ' + categoryArray[1] + ' XP ' + categoryArray[2]
    return parsedString
  }
}

module.exports = Hiscores
