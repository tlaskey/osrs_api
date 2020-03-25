# Node OSRS API
A Node API for the popular MMORPG Old School Runescape, giving you easy access to hiscore information and Grand Exchange item lookup.

It uses a lightweight HTTP request library called [Reqi!](https://github.com/mster/reqi) 

Docs WIP...

# Install


# Usage

Here's an example!

```javascript
'use strict'

const GrandExchange = new (require('./lib/Grand Exchange/items_api'))()
const Hiscores = new (require('./lib/Hiscores/highscores_api'))()

async function getItem (itemID) {
  const responseBody = await GrandExchange.getItem(itemID)
  console.log(GrandExchange.parseItemBody(responseBody))
  console.log(responseBody)
  return responseBody
}

async function getPlayerHiscores (username, gameMode, category) {
  const responseBody = await Hiscores.getPlayer(username, gameMode)
  console.log(Hiscores.parseHiscores(username, responseBody, category))
  return responseBody
}

getItem(2)
getPlayerHiscores('Zezima', 'main', 'strength')
```
