{
  "name": "rank",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "IeKyf",
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
      "condition": "1",
      "comparison": "0",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "2",
      "iffalseVal": "9",
      "name": "Check Parameters"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "${tempVars(\"ID\")}xp",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "xp",
      "name": "Store Member Data"
    },
    {
      "member": "0",
      "varName": "",
      "dataName": "${tempVars(\"ID\")}level",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "lev",
      "name": "Store Member Data"
    },
    {
      "title": "${mentionedUser} rank!",
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
      "message": "**Levels:** ${tempVars(\"lev\")}\n**XP:** ${tempVars(\"xp\")}",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "emb",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "${tempVars(\"ID\")}xp",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "xp",
      "name": "Store Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "${tempVars(\"ID\")}level",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "lev",
      "name": "Store Member Data"
    },
    {
      "title": "${member} rank!",
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
      "message": "**Levels:** ${tempVars(\"lev\")}\n**XP:** ${tempVars(\"xp\")}",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "emb",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    }
  ],
  "comType": "0"
}
