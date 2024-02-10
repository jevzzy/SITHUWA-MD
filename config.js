const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94761516805'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94761516805"
global.devs = '94761516805';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU1IdlhrcXJxWkhTdGYrL21hWWUrT0xKMlpwU1h6eThobnFmSGhOOWUyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzN5M3ltK1IyTGJLY2M3d3Fqa2RqaWNsK2R0cmZySTNLVHBZZmtFNGpFTT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2THluYU1GRUJCT3J5Wmh0SzR4bGFwZmtDd1kxdCtFSURJS2Q4TVVFSVdzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGOUFpdEd6b3ZTelo2ZWZ6Yk9VTFYxTjF3aDE0aUJXZm1lUUJFR0JxRlZRPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZGeERaZ0pCeFc5VExSMWJFMTBqMGwxaS9iOG5mZGtFR2x1eEIxcjV4V3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IngyblR6TmFWUDFRNGc5dzNMWVdxNjJ3dlM1Y3pYZ0FpdkJ4QWpnTk9rejQ9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3SktlU2ZJbys3Q0V4cnc4UHpZS29ibGF2TkZpaWZ2OTNaS1dFYytEUXRTTWozSDFWZEtCaDZIN3dTTFR6YVdBc3pXb050VXg4UlkvRWhodGliL0dCZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjQ5LCJhZHZTZWNyZXRLZXkiOiIxZGNDUlV1VTB1M0tkSWVpWldYeHdKR1UwUnhTWkpwRjNhSm1vNEI3eTNzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNDIxMjUwODNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0E5MzZBRjJFOEM0QkZDQUEyQkUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwNzUzNzczNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoicGVxMFRMdndSUWVWblhRdmtURVNyZyIsInBob25lSWQiOiIxYWZiZDI4My04NmQyLTRjYzQtODJhMS03Njk5OTM3ZWFmZjIiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2U0VUR1ckcxZGJEelRaUklVaTQ1b2hwc0tNPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPM1ZQRnZwVURyQzhGQjVrbW9aSzl0eElzSkU9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNLU2Y3NzhERU1EcW02NEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0cGNuQ0pmRzQwaXlrYUtJNS9WUzgrMGhPTHNHdnRzOWhMSm5nM2pEeEhBPSIsImFjY291bnRTaWduYXR1cmUiOiIyN1M0ay9xSks3b05RdHI0TC82Zm40ZGQ5dDl3OGFPRTJmYjByYUhBTEJaUGh4bmVaUHdKeHJqMGU0OWsxbXFKdEdxbXRFODZuTEtPY0Q3dDNlUVBDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRCswZ3NRa3gxMnF1c1pJbUFVN3B0OEE5Qi9CUWpDWk1mQmNiajdMT0F1YkVnM1IxYzdzMmlQN2Jsc2dpNkFGMWh1TXVmNFhXNmZoMEtuZ21ESGRBQnc9PSJ9LCJtZSI6eyJpZCI6IjIzNDcwNDIxMjUwODM6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSmV2enp5IGV4Y2hhbmdlIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDIxMjUwODM6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZUtYSndpWHh1TklzcEdpaU9mMVV2UHRJVGk3QnI3YlBZU3laNE40dzhSdyJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNzUzNzczMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFHUWIifQ==",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SITHUM KALHARA',
  
  botname:   process.env.BOT_NAME === undefined ? "SITHUWA-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'sithumkalhara' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
