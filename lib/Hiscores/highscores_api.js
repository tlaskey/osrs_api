'use strict'

const { GAMEMODES, HISCORES } = require('../constants')
const client = new (require('reqi'))()

class Hiscores {
    async get_player(player_name, game_mode= 'main') {
        try {
            const response = await client.
                get(`https://secure.runescape.com/m=hiscore_oldschool${GAMEMODES[game_mode]}/index_lite.ws?player=${player_name}`)
            return response.body
        } catch(err) {console.error(err)}
    }

    parse_hiscores(resBody, category) {
        const hiscores_array = resBody.split(/\r?\n/)
        const array_category = hiscores_array[HISCORES[category]]
        const category_array = array_category.split(',')
        console.log(category, ':', 'rank', category_array[0], 'level', category_array[1], 'xp', category_array[2])
        return category_array
    }
}


module.exports = Hiscores