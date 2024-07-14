const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349080101565";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_12_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3OSxcbiAgICAgICAgODEsXG4gICAgICAgIDUyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMwLFxuICAgICAgICA0MixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMzksXG4gICAgICAgIDgxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwLFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExNixcbiAgICAgICAgNzAsXG4gICAgICAgIDkyLFxuICAgICAgICAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA4LFxuICAgICAgICA5OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA1LFxuICAgICAgICA1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDY3LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyOSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICA0MixcbiAgICAgICAgNzUsXG4gICAgICAgIDc1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTczLFxuICAgICAgICA0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDk0LFxuICAgICAgICA3NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTksXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDM4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMixcbiAgICAgICAgODgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYyLFxuICAgICAgICA2NSxcbiAgICAgICAgMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDM5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3LFxuICAgICAgICA0MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIndVZUNyRC8rVlBlaklsWjY2Kzl2UmdnUkQwdHNHNjR0S1pFL2lyQzcvZEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZ1V2hnTDRqU0lDallpN2xUZkl4aXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzkxNWRkY2QtNTFjMy00NGVhLWFiZTMtZmY2Yzg5ZDYzMTE3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ0LFxuICAgICAgMjEzLFxuICAgICAgMTgyLFxuICAgICAgMjMwLFxuICAgICAgMjI5LFxuICAgICAgMTI0LFxuICAgICAgMTcxLFxuICAgICAgMTQ5LFxuICAgICAgMjcsXG4gICAgICAxMTAsXG4gICAgICAxMjYsXG4gICAgICAyMTUsXG4gICAgICAyMDYsXG4gICAgICAyMzksXG4gICAgICAyMzEsXG4gICAgICAyLFxuICAgICAgMjQyLFxuICAgICAgNzAsXG4gICAgICA3MCxcbiAgICAgIDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIsXG4gICAgICAxNzgsXG4gICAgICAyMDEsXG4gICAgICAxODEsXG4gICAgICAyMjUsXG4gICAgICAzNyxcbiAgICAgIDM2LFxuICAgICAgMjQyLFxuICAgICAgMTUxLFxuICAgICAgMyxcbiAgICAgIDcsXG4gICAgICA5MixcbiAgICAgIDE2NixcbiAgICAgIDIxMixcbiAgICAgIDEwMCxcbiAgICAgIDkwLFxuICAgICAgOTYsXG4gICAgICAyNyxcbiAgICAgIDIwMSxcbiAgICAgIDYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFLUzZTN0hWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDgwMTAxNTY1OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJZdXN1ZiBHcmFwaGljc1wiLFxuICAgIFwibGlkXCI6IFwiMTM5NzcxMzcyNDIxMTUyOjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1A4b09jR0VLSzh6YlFHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXSmQxZ1p0TzFTMXNiNDJaLzBCdDVRYjFVb1NSdFF5ektJcjFYekJLaVdRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5lUFRLZFVUd05kekJUN3o1OUswUEtySU9ZTTVVS1VKT2p4Ry9iRDRwR1pWMTkraGhWbVR2alRka044VFFZbzZNbHlLSnc0dnVuUTErcU1MN1ZaZUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVNaUIxb05ReDVkUEpGMHl6aFgwb3RUYmk4NjRCa0tRMzJLVlgrREZmeXMwYytOL3hBdDRTQU1KTXU1L1RlZlRzbXpNbFhtTGgzRFcxdU8zYlE3WkRBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwODAxMDE1NjU6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDkzMzkyNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
