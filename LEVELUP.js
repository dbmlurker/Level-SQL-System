{
  "name": "LEVELUP",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "TCJre",
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
      "member": "1",
      "varName": "",
      "dataName": "${tempVars(\"ID\")}xp",
      "changeType": "0",
      "value": "0",
      "name": "Control Member Data"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "${tempVars(\"ID\")}level",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "b4",
      "name": "Store Member Data"
    },
    {
      "FirstNumber": "${tempVars(\"b4\")}",
      "info": "0",
      "SecondNumber": "1",
      "storage": "1",
      "varName": "now",
      "name": "Basic Math Operation"
    },
    {
      "member": "1",
      "varName": "",
      "dataName": "${tempVars(\"ID\")}level",
      "changeType": "0",
      "value": "tempVars(\"now\")",
      "name": "Control Member Data"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "**${member}, You leveled up! You are now level ${tempVars(\"now\")}**",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    }
  ],
  "comType": "0"
}
