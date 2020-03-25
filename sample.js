'use strict'

const GrandExchange = require('./lib/Grand Exchange/items_api')
const Hiscores = require('./lib/Hiscores/highscores_api')

async function getItem (itemID) {
  const ge = new GrandExchange()
  const response = await ge.getItem(itemID)
  console.log(itemID, response.body)
  console.log(ge.parseItemBody(response.body))
}

async function getPlayerHiscores (username, gameMode, category) {
  const hiscores = new Hiscores()
  const responseBody = await hiscores.getPlayer(username, gameMode)
  console.log(hiscores.parseHiscores(responseBody, category))
}

getItem(2)
getPlayerHiscores('Manr', 'main', 'overall')
