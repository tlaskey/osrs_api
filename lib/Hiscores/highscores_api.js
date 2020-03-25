'use strict'

const GAMEMODES = require('../constants')
const client = new (require('reqi'))()

class Hiscores {
    async get_player(player_name, game_mode= 'main') {
        console.log(GAMEMODES)
        console.log('GAME: ' + GAMEMODES[game_mode])
        try {
            const response = await client.
                get(`https://secure.runescape.com/m=hiscore_oldschool${GAMEMODES[game_mode]}/index_lite.ws?player=${player_name}`)
            return response
        } catch(err) {console.error(err)}
    }
}


module.exports = Hiscores