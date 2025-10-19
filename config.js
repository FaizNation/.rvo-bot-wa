// Base © Kyaimi Silence
// Dev © Zion dev
//Recode © Kenn Official

require("./Mane")
const fs = require('fs')
const { version } = require("./package.json")
//~~~~~~~~~SETTING BOT~~~~~~~~~~//

// set prefix
global.setprefix = "."

// Bebas Ubah
global.owner = "6285135729853"
global.nobot = "6281938245104"
global.namaowner = "FaizNation"
global.namaBot = "FaizNation👑"
global.title = "FaizNation👑"

// Jangan Di ubah
global.creator = `${owner}@s.whatsapp.net` 
global.foother = `© ${namaBot}`
global.versi = version
global.nama = namaBot 
global.namach = nama 
global.namafile = foother 
global.author = namaowner

// Bebas Ubah
// True = on || False = Off 
global.autoread = false
global.autotyping = false
global.Antilinkgc = false
global.Antilinkch = false
global.antispam = false
global.onlygc = false
global.autobio = false

// [ THEME URL & URL ] ========//
global.thumbnail = "https://files.catbox.moe/dk1rcu.jpg"


// User Sosmed
global.tt = "@whousdisz"
global.yt = "@amaneofc"
global.ig = "@amaneofc"

// Setting Api cVPS
global.doToken = "APIKEY"
global.linodeToken = "APIKEY"

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https"
global.apikey = "ptla" //ptla
global.capikey = "ptlc" //ptlc

// Isi Api Gemini Lu
global.api = "AIzaSyDE7R-5gnjgeqYGSMGiZVjA5VkSrQvile8"

// Settings reply ~~~~~~~~~//
global.mess = {
    owner: "Khusus Owner",
    prem: "Khusus Premium",
    group: "Khusus di Group Chat",
    admin: "Khusus Admin",
    botadmin: "Bot Harus Jadi Admin",
    private: "Khusus di Private Chat",
    done: "Sukses"
}

global.packname = nama
global.author = namaBot

//
//~~~~~~~~~~~ DIEMIN ~~~~~~~~~~//

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
