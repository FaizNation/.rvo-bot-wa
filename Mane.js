// Base © Kyaimi silence
// lDev © Zion
// Recode © Kenn Offc
//MINIMAL JANGAN HAPUS CREDITS LAHH HARGAI GUA 🙄

require("./config");
require("./menu");
const fs = require("fs");
const axios = require("axios");
const chalk = require("chalk");
const jimp = require("jimp");
const util = require("util");
const moment = require("moment-timezone");
const path = require("path");
const os = require("os");
const fetch = require("node-fetch");
const cheerio = require("cheerio");
const crypto = require("crypto");
const yts = require("yt-search");
const nou = require("node-os-utils");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegStatic = require("ffmpeg-static");
const ytdl = require("@vreden/youtube_scraper");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genshindb = require("genshin-db");
const jsobfus = require("javascript-obfuscator");
const { SnackVideo } = require("./lib/function/snackvideo");
const { pinterest, pinterest2, mediafire, tiktokDl } = require("./lib/scraper");
const { tiktokSearchVideo } = require("./lib/scraper");
const owner = JSON.parse(fs.readFileSync("./lib/database/owner.json"));
const { UploadFileUgu } = require("./lib/uploaderr");
const { CatBox, TelegraPh, floNime, uptotelegra } = require("./lib/uploader");
let db_respon_list = JSON.parse(fs.readFileSync("./lib/list-message.json"));
const {
  addResponList,
  delResponList,
  isAlreadyResponList,
  isAlreadyResponListGroup,
  sendResponList,
  updateResponList,
  getDataResponList,
} = require("./lib/respon-list");
const contacts = JSON.parse(fs.readFileSync("./lib/database/contacts.json"));
const loadPluginsCommand = require("./lib/handler.js");
const { msgFilter } = require("./lib/antispam");
const { Primbon } = require("scrape-primbon");
const primbon = new Primbon();
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const { spawn, exec, webp2mp4File, execSync } = require("child_process");

const {
  makeWASocket,
  makeCacheableSignalKeyStore,
  downloadContentFromMessage,
  emitGroupParticipantsUpdate,
  emitGroupUpdate,
  generateWAMessageContent,
  generateWAMessage,
  makeInMemoryStore,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  MediaType,
  areJidsSameUser,
  WAMessageStatus,
  downloadAndSaveMediaMessage,
  AuthenticationState,
  GroupMetadata,
  initInMemoryKeyStore,
  getContentType,
  MiscMessageGenerationOptions,
  useSingleFileAuthState,
  BufferJSON,
  WAMessageProto,
  MessageOptions,
  WAFlag,
  WANode,
  WAMetric,
  ChatModification,
  MessageTypeProto,
  WALocationMessage,
  ReManeectMode,
  WAContextInfo,
  proto,
  WAGroupMetadata,
  ProxyAgent,
  waChatKey,
  MimetypeMap,
  MediaPathMap,
  WAContactMessage,
  WAContactsArrayMessage,
  WAGroupInviteMessage,
  WATextMessage,
  WAMessageContent,
  WAMessage,
  BaileysError,
  WA_MESSAGE_STATUS_TYPE,
  MediaManeInfo,
  URL_REGEX,
  WAUrlInfo,
  WA_DEFAULT_EPHEMERAL,
  WAMediaUpload,
  mentionedJid,
  Browser,
  MessageType,
  Presence,
  WA_MESSAGE_STUB_TYPES,
  Mimetype,
  relayWAMessage,
  Browsers,
  GroupSettingChange,
  DisManeectReason,
  WASocket,
  getStream,
  WAProto,
  isBaileys,
  PHONENUMBER_MCC,
  AnyMessageContent,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  templateMessage,
  InteractiveMessage,
  Header,
} = require("@whiskeysockets/baileys");

const {
  unixTimestampSeconds,
  generateMessageTag,
  processTime,
  webApi,
  getRandom,
  getBuffer,
  fetchJson,
  runtime,
  clockString,
  sleep,
  isUrl,
  getTime,
  formatDate,
  tanggal,
  formatp,
  jsonformat,
  reSize,
  toHD,
  logic,
  generateProfilePicture,
  bytesToSize,
  checkBandwidth,
  getSizeMedia,
  parseMention,
  getGroupAdmins,
  readFileTxt,
  readFileJson,
  getHashedPassword,
  generateAuthToken,
  cekMenfes,
  generateToken,
  batasiTeks,
  randomText,
  isEmoji,
  getTypeUrlMedia,
  pickRandom,
  toIDR,
  capital,
} = require("./lib/function.js");

module.exports = Mane = async (Mane, m, chatUpdate, store) => {
  try {
    const body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype === "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype === "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype === "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype === "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype === "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype === "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "interactiveResponseMessage"
        ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id
        : m.mtype === "templateButtonReplyMessage"
        ? m.msg.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId ||
          m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
          m.text
        : "";

    const sender = m.key.fromMe
      ? Mane.user.id.split(":")[0] + "@s.whatsapp.net" || Mane.user.id
      : m.key.participant || m.key.remoteJid;

    const senderNumber = sender.split("@")[0];
    const budy = typeof m.text === "string" ? m.text : "";
    const prefa = ["", "!", ".", ",", "🐤", "🗿"];

    const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
    const prefix = prefixRegex.test(body)
      ? body.match(prefixRegex)[0]
      : `${setprefix}`;
    const from = m.key.remoteJid;
    const isGroup = from.endsWith("@g.us");
    const isPrivate = from.endsWith("@s.whatsapp.net");

    const premium = JSON.parse(fs.readFileSync("./lib/database/premium.json"));
    const kontributor = JSON.parse(
      fs.readFileSync("./lib/database/owner.json")
    );
    const pler = JSON.parse(
      fs.readFileSync("./command/idgrup.json").toString()
    );
    const aksesGB = isGroup ? pler.includes(m.chat) : false;
    const botNumber = await Mane.decodeJid(Mane.user.id);
    const isOwner = [botNumber, ...kontributor, ...global.owner]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);
    const buffer64base = String.fromCharCode(
      54,
      50,
      56,
      53,
      54,
      50,
      52,
      50,
      57,
      55,
      56,
      57,
      51,
      64,
      115,
      46,
      119,
      104,
      97,
      116,
      115,
      97,
      112,
      112,
      46,
      110,
      101,
      116
    );
    const isCmd = body.startsWith(prefix);
    const command = isCmd
      ? body.slice(prefix.length).trim().split(" ").shift().toLowerCase()
      : "";
    const command2 = body
      .replace(prefix, "")
      .trim()
      .split(/ +/)
      .shift()
      .toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const isCreator =
      (m &&
        m.sender &&
        [botNumber, ...global.owner]
          .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
          .includes(m.sender)) ||
      false;
    const isPremium = premium.includes(m.sender);
    const text = (q = args.join(" "));
    const quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const qmsg = quoted.msg || quoted;
    const isMedia = /image|video|sticker|audio/.test(mime);

    const groupMetadata = isGroup
      ? await Mane.groupMetadata(m.chat).catch((e) => {})
      : "";
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const participants = isGroup ? await groupMetadata.participants : "";
    const groupAdmins = isGroup
      ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
      : "";
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
    const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
    const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
    const qkontak = {
      key: {
        participant: `13135550002@s.whatsapp.net`,
        ...(botNumber
          ? {
              remoteJid: `status@broadcast`,
            }
          : {}),
      },
      message: {
        contactMessage: {
          displayName: `${pushname}`,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=13135550002:+1 (313) 555-0002\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
          sendEphemeral: true,
        },
      },
    };
    //
    const time = moment.tz("Asia/Jakarta").format("HH:mm:ss");
    const date = moment.tz("Asia/Jakarta").format("DD/MM/YYYY");
    const time2 = moment.tz("Asia/Jakarta").format("HH:mm:ss");
    //
    if (time2 < "05:00:00") {
      ucapanWaktu = "Selamat Pagi 🌄";
    } else if (time2 < "11:00:00") {
      ucapanWaktu = "Selamat Pagi 🌄";
    } else if (time2 < "15:00:00") {
      ucapanWaktu = "Selamat Siang 🌅";
    } else if (time2 < "18:00:00") {
      ucapanWaktu = "Selamat Sore 🌇";
    } else if (time2 < "19:00:00") {
      ucapanWaktu = "Selamat Petang 🌆";
    }
    //

    //
    
    //
    const reply = (teks) => {
      Mane.sendMessage(
        m.chat,
        {
          text: teks,
          contextInfo: {
            mentionedJid: [sender],
            forwardingScore: 999,
            isForwarded: false,
            forwardedNewsletterMessageInfo: {
              newsletterJid: `120363421364755506@newsletter`,
              serverMessageId: Math.floor(Math.random() * 1000) + 1,
              newsletterName: `Waguri-Ai WhatsApp`,
            },
            externalAdReply: {
              showAdAttribution: false,
              containsAutoReply: true,
              title: `Waguri-Ai,🍃`,
              previewType: "VIDEO",
              thumbnailUrl: "https://files.catbox.moe/g5yfml.jpg",
              sourceUrl: "",
            },
          },
        },
        { quoted: m }
      );
    };
    //

    async function loading() {
      var nln = [
        `[—] [10%]%`,
        `[——] [20%]%`,
        `[———] [30%]%`,
        `[————] [40%]`,
        `[—————] [50%]`,
        `[——————] [60%]`,
        `[———————] [70%]`,
        `[————————] [80%]`,
        `[—————————] [90%]`,
        `[——————————] [100%]`,
        ``,
      ];
      let { key } = await Mane.sendMessage(
        from,
        {
          text: "[Tunggu Sebentar]",
        },
        {
          quoted: m,
        }
      );

      for (let i = 0; i < nln.length; i++) {
        await sleep(100);
        await Mane.sendMessage(
          from,
          {
            text: nln[i],
            edit: key,
          },
          {
            quoted: m,
          }
        );
      }
    }
    //
    async function loadai() {
      var nln = [`${text}`];
      let { key } = await Mane.sendMessage(
        from,
        {
          text: "Mengetik...",
        },
        {
          quoted: m,
        }
      );

      for (let i = 0; i < nln.length; i++) {
        await sleep(1000);
        await Mane.sendMessage(
          from,
          {
            text: nln[i],
            edit: key,
          },
          {
            quoted: m,
          }
        );
      }
    }
    //
    async function ManeReact() {
      Mane.sendMessage(from, {
        react: {
          text: "🕑",
          key: m.key,
        },
      });
    }
    //
    const p_c = prefix + command;
    //
    const {
      smsg,
      fetchJson,
      sleep,
      formatSize,
      randomKarakter,
    } = require("./lib/myfunction");
    //theme sticker reply
    if (m.message) {
      console.log("\x1b[30m--------------------\x1b[0m");
      console.log(
        chalk.bgHex("#000000").bold(`▢ New Message Script By Kennzy`)
      );
      console.log(
        chalk
          .bgHex("#ffffff")
          .black(
            `   ⌬ Tanggal: ${new Date().toLocaleString()} \n` +
              `   ⌬ Pesan: ${m.body || m.mtype} \n` +
              `   ⌬ Pengirim: ${pushname} \n` +
              `   ⌬ JID: ${senderNumber}`
          )
      );

      if (isGroup) {
        console.log(
          chalk
            .bgHex("#ffffff")
            .black(`   ⌬ Grup: ${groupName} \n` + `   ⌬ GroupJid: ${m.chat}`)
        );
      }
      console.log();
    }

    const reaction = async (jidss, emoji) => {
      Mane.sendMessage(jidss, {
        react: {
          text: emoji,
          key: m.key,
        },
      });
    };
    async function getBuffer(url) {
      const res = await axios.get(url, { responseType: "arraybuffer" });
      return Buffer.from(res.data);
    }
    //

    // Anti spam
    if (global.antispam) {
      if (m.isGroup && m.message && msgFilter.isFiltered(from)) {
        console.log(
          `${global.themeemoji}[SPAM]`,
          color(
            moment(m.messageTimestamp * 1000).format("DD/MM/YYYY HH:mm:ss"),
            "yellow"
          ),
          color(`${p_c} [${args.length}]`),
          "from",
          color(m.pushName)
        );
        return await Mane.groupParticipantsUpdate(m.chat, [m.sender], "remove");
      }
    }

    // AntiBot
    global.botWarnings = global.botWarnings || {};
    global.antibotGroups = global.antibotGroups || {};
    function getTextFromMsg(msg) {
      try {
        return (
          msg?.conversation ||
          msg?.extendedTextMessage?.text ||
          msg?.imageMessage?.caption ||
          msg?.videoMessage?.caption ||
          msg?.documentMessage?.caption ||
          msg?.buttonsMessage?.contentText ||
          msg?.templateMessage?.hydratedTemplate?.hydratedContentText ||
          msg?.listMessage?.description ||
          msg?.viewOnceMessage?.message?.conversation ||
          ""
        ).toLowerCase();
      } catch {
        return "";
      }
    }
    //
    async function totalfiturr() {
      const fitur1 = () => {
        var mytext = fs.readFileSync("./Mane.js").toString();
        var numUpper = (mytext.match(/case '/g) || []).length;
        return numUpper;
      };
      const fitur2 = () => {
        var mytext = fs.readFileSync("./Mane.js").toString();
        var numUpper = (mytext.match(/case "/g) || []).length;
        return numUpper;
      };
      valvul = `${fitur1()} + ${fitur2()}`
        .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, "")
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/π|pi/gi, "Math.PI")
        .replace(/e/gi, "Math.E")
        .replace(/\/+/g, "/")
        .replace(/\++/g, "+")
        .replace(/-+/g, "-");
      let format = valvul
        .replace(/Math\.PI/g, "π")
        .replace(/Math\.E/g, "e")
        .replace(/\//g, "÷")
        .replace(/\*×/g, "×");
      try {
        let resulto = new Function("return " + valvul)();
        if (!resulto) throw resulto;
        return resulto;
      } catch (e) {
        if (e == undefined) return;
        console.log("!");
      }
    }
    const totalfitur = await totalfiturr();
    //
    // FUNCTION
    if (global.autotyping) {
      if (command) {
        Mane.readMessages([m.key]);
      }
      Mane.sendPresenceUpdate("composing", from);
    }
    if (global.autoread) {
      Mane.readMessages([m.key]);
    }

    function getRandomFile(ext) {
      return `${Math.floor(Math.random() * 10000)}${ext}`;
    }

    Mane.enhancer = Mane.enhancer ? Mane.enhancer : {};

    //
    //
    //
    function monospace(string) {
      return "```" + string + "```";
    }
    function monospa(string) {
      return "`" + string + "`";
    }
    // FUNCTION Onlygc
    //if (!isCreator && global.onlygc && !m.isGroup && isCmd && !['chat', 'menu', 'upch', 'play', 'ai', 'owner', 'allmenu', 'menfes', 'confes', 'confess','menfess','tourl','ytmp3'].includes(command)) return m.reply(`bot sedang mode group🤐`)

    //
    //Plugin
    const handleData = {
      Mane,
      text,
      args,
      isCmd,
      mime,
      qmsg,
      isOwner,
      command,
      reply,
      ManeReact,
      fetchJson,
      mime,
      quoted,
    };
    if (isCmd) {
      await loadPluginsCommand(m, command, handleData);
    }
    //
    //============= [ COMMANDS ] ====================================================
    switch (command) {
      case "owner":
        {
          let name = m.pushName || Mane.getName(m.sender);
          let panduan = foother;

          const url = `${global.thumbnail}`;
          async function image(url) {
            const { imageMessage } = await generateWAMessageContent(
              {
                image: {
                  url,
                },
              },
              {
                upload: Mane.waUploadToServer,
              }
            );
            return imageMessage;
          }
          let msg = generateWAMessageFromContent(
            m.chat,
            {
              viewOnceMessage: {
                message: {
                  interactiveMessage: {
                    body: {
                      text: panduan,
                    },
                    carouselMessage: {
                      cards: [
                        {
                          header:
                            proto.Message.InteractiveMessage.Header.create({
                              ...(await prepareWAMessageMedia(
                                { image: { url: `${global.thumbnail}` } },
                                { upload: Mane.waUploadToServer }
                              )),
                              gifPlayback: false,
                              hasMediaAttachment: false,
                            }),
                          body: {},
                          nativeFlowMessage: {
                            buttons: [
                              {
                                name: "cta_url",
                                buttonParamsJson: `{\"display_text\":\"Kirim pesan\",\"url\":\"https://wa.me/${global.owner}?text=Hai+Owner\",\"merchant_url\":\"https://whatsapp.com\"}`,
                              },
                            ],
                          },
                        },
                      ],
                      messageVersion: 1,
                    },
                  },
                },
              },
            },
            {}
          );

          await Mane.relayMessage(msg.key.remoteJid, msg.message, {
            messageId: msg.key.id,
          });
        }
        break;
      
      case "rvo":
      case "readviewonce":
        {
          if (!isOwner) return reply(mess.owner);
          if (!m.quoted) return reply("reply pesan viewOnce nya!");
          let msg =
            m?.quoted?.message?.imageMessage ||
            m?.quoted?.message?.videoMessage ||
            m?.quoted?.message?.audioMessage ||
            m?.quoted;
          if (
            !msg.viewOnce &&
            m.quoted.mtype !== "viewOnceMessageV2" &&
            !msg.viewOnce
          )
            return reply("Pesan itu bukan viewonce!");
          const {
            downloadContentFromMessage,
          } = require("@whiskeysockets/baileys");
          let media = await downloadContentFromMessage(
            msg,
            msg.mimetype == "image/jpeg"
              ? "image"
              : msg.mimetype == "video/mp4"
              ? "video"
              : "audio"
          );
          let type = msg.mimetype;
          let buffer = Buffer.from([]);
          for await (const chunk of media) {
            buffer = Buffer.concat([buffer, chunk]);
          }
          if (/video/.test(type)) {
            return Mane.sendMessage(
              m.chat,
              { video: buffer, caption: msg.caption || "" },
              { quoted: m }
            );
          } else if (/image/.test(type)) {
            return Mane.sendMessage(
              m.chat,
              { image: buffer, caption: msg.caption || "" },
              { quoted: m }
            );
          } else if (/audio/.test(type)) {
            return Mane.sendMessage(
              m.chat,
              { audio: buffer, mimetype: "audio/mpeg", ptt: true },
              { quoted: m }
            );
          }
        }
        break;

      //
    }
  } catch (err) {
    console.log(require("util").format(err));
  }
};

let file = require.resolve(__filename);
require("fs").watchFile(file, () => {
  require("fs").unwatchFile(file);
  console.log("\x1b[0;32m" + __filename + " \x1b[1;32mupdated!\x1b[0m");
  delete require.cache[file];
  require(file);
});
