{
  "name": "levels",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "rmxIm",
  "actions": [
    {
      "server": "0",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "ID",
      "name": "Store Server Info"
    },
    {
      "server": "0",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "name",
      "name": "Store Server Info"
    },
    {
      "debu": "1",
      "numbefst2": ".",
      "numbefstselect": "2",
      "sort": "1",
      "start": "result",
      "middle": "levels -",
      "end": "username",
      "getresults": "10",
      "dataName": "${tempVars(\"ID\")}level",
      "varName2": "list",
      "storage": "1",
      "name": "Store Member Data List"
    },
    {
      "title": "${tempVars(\"name\")} level leaderboard",
      "author": "",
      "color": "RANDOM",
      "timestamp": "false",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "emb",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "emb",
      "message": "${tempVars(\"list\")}",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "emb",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    }
  ]
}
