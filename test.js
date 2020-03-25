'use strict'

const GrandExchange = require('./lib/Grand Exchange/items_api')
const Hiscores = require('./lib/Hiscores/highscores_api')

async function get_ge_item(item_id) {
    const ge = new GrandExchange()
    const response = await ge.get_item(item_id)
    console.log(response)
}

async function get_player_hiscores(username, game_mode, category) {
    const hiscores = new Hiscores()
    const responseBody = await hiscores.get_player(username, game_mode)
    console.log(hiscores.parse_hiscores(responseBody, category))
}

get_player_hiscores('Manr', 'main', 'overall')