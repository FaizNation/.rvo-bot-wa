const axios = require('axios')
const chalk = require('chalk')
const FormData = require('form-data')
 
const aiLabs = {
  api: {
    base: 'https://text2video.aritek.app',
    endpoints: {
      text2img: '/text2img',
      generate: '/txt2videov3',
      video: '/video'
    }
  },
 
  headers: {
    'user-agent': 'NB Android/1.0.0',
    'accept-encoding': 'gzip',
    'content-type': 'application/json',
    authorization: ''
  },
 
  state: {
    token: null
  },
 
  setup: {
    cipher: 'hbMcgZLlzvghRlLbPcTbCpfcQKM0PcU0zhPcTlOFMxBZ1oLmruzlVp9remPgi0QWP0QW',
    shiftValue: 3,
 
    dec(text, shift) {
      return [...text].map(c =>
        /[a-z]/.test(c)
          ? String.fromCharCode((c.charCodeAt(0) - 97 - shift + 26) % 26 + 97)
          : /[A-Z]/.test(c)
          ? String.fromCharCode((c.charCodeAt(0) - 65 - shift + 26) % 26 + 65)
          : c
      ).join('');
    },
 
    decrypt: async () => {
      if (aiLabs.state.token) return aiLabs.state.token;
      const input = aiLabs.setup.cipher;
      const shift = aiLabs.setup.shiftValue;
      const decrypted = aiLabs.setup.dec(input, shift);
      aiLabs.state.token = decrypted;
      aiLabs.headers.authorization = decrypted;
      return decrypted;
    }
  },
 
  deviceId() {
    return Array.from({ length: 16 }, () =>
      Math.floor(Math.random() * 16).toString(16)
    ).join('');
  },
 
  text2img: async (prompt) => {
    if (!prompt?.trim()) {
      return {
        success: false,
        code: 400,
        result: { 
          error: 'Yang bener aja anjirr, inputnya kosong begitu 🗿'
        }
      };
    }
    const token = await aiLabs.setup.decrypt();
    const form = new FormData();
    form.append('prompt', prompt);
    form.append('token', token);
    try {
      const url = aiLabs.api.base + aiLabs.api.endpoints.text2img;
      const res = await axios.post(url, form, {
        headers: {
          ...aiLabs.headers,
          ...form.getHeaders()
        }
      });
      const { code, url: imageUrl } = res.data;
      if (code !== 0 || !imageUrl) {
        console.log(chalk.yellow('Horreee ✌🏻 Generate imagenya gagal bree wkwk'));
        return {
          success: false,
          code: res.status,
          result: { 
            error: 'Error bree 😂'
          }
        };
      }
      console.log(chalk.green('Done bree ..'));
      return {
        success: true,
        code: res.status,
        result: {
          url: imageUrl.trim(),
          prompt
        }
      };
    } catch (err) {
      return {
        success: false,
        code: err.response?.status || 500,
        result: {
          error: err.message || 'Error bree 😂'
        }
      };
    }
  },
 
  generate: async ({ prompt = '', type = 'video', isPremium = 1 } = {}) => {
    if (!prompt?.trim() || !/^[a-zA-Z0-9\s.,!?'-]+$/.test(prompt)) {
      return {
        success: false,
        code: 400,
        result: { 
          error: 'Promptnya kagak boleh kosong bree.. apalagi ada karakternya aneh begitu :v kagak boleh yak 😂'
        }
      };
    }
    if (!/^(image|video)$/.test(type)) {
      return {
        success: false,
        code: 400,
        result: {
          error: 'Tipenya kagak valid.. lu bisa pake image atau video yak.. ☺️'
        }
      };
    }
    console.log(chalk.cyan(`📡 Lagi connect ke Server AInya nih type ${type}...`));
    if (type === 'image') {
      return await aiLabs.text2img(prompt);
    } else {
      await aiLabs.setup.decrypt();
      const payload = {
        deviceID: aiLabs.deviceId(),
        isPremium,
        prompt,
        used: [],
        versionCode: 59
      };
      try {
        const url = aiLabs.api.base + aiLabs.api.endpoints.generate;
        const res = await axios.post(url, payload, { headers: aiLabs.headers });
        const { code, key } = res.data;
        if (code !== 0 || !key || typeof key !== 'string') {
          console.log(chalk.yellow('Keynya kagak valid bree, coba lagi yak nanti... 😂'));
          return {
            success: false,
            code: res.status,
            result: { 
              error: 'Heumm.. Gagal bree ngambil Keynya 🫵🏻🐷' 
            }
          };
        }
        return await aiLabs.video(key);
      } catch (err) {
        console.log(chalk.red('Walah... Kagak bisa connect ke Server APInya bree 😂 '));
        return {
          success: false,
          code: err.response?.status || 500,
          result: {
            error: err.message || 'Error bree... 😂'
          }
        };
      }
    }
  },
 
  video: async (key) => {
    if (!key || typeof key !== 'string') {
      console.log(chalk.red('Keynya kagak valid bree ... Prosesnya dibatalin wkwk'));
      return {
        success: false,
        code: 400,
        result: { 
          error: 'Keynya kagak valid bree... 😏😂'
        }
      };
    }
    await aiLabs.setup.decrypt();
    const payload = { keys: [key] };
    const url = aiLabs.api.base + aiLabs.api.endpoints.video;
    const maxAttempts = 100;
    const delay = 2000;
    let attempt = 0;
    let lastProgress = '';
    console.log(chalk.blue('⏳ Santai aja dulu gasih, videonya lagi diproses... '));
    while (attempt < maxAttempts) {
      attempt++;
      try {
        const res = await axios.post(url, payload, {
          headers: aiLabs.headers,
          timeout: 15000
        });
        const { code, datas } = res.data;
        if (code === 0 && Array.isArray(datas) && datas.length > 0) {
          const data = datas[0];
          if (!data.url || data.url.trim() === '') {
            const progress = parseFloat(data.progress || 0);
            const pi = Math.round(progress);
            const barLength = 20;
            const filled = Math.floor(pi / 5);
            const bar = '█'.repeat(filled) + '░'.repeat(barLength - filled);
            if (progress !== lastProgress) {
              process.stdout.write(chalk.cyan(`\r⚡ Generating: [${bar}] ${pi}%`));
              lastProgress = progress;
            }
            await new Promise(r => setTimeout(r, delay));
            continue;
          }
          process.stdout.write(chalk.cyan(`\r⚡ Generating: [${'█'.repeat(20)}] 100%`));
          console.log('\n' + chalk.bgGreen.black(' DONE ') + chalk.green(' Videonya dah jadi nih 🤭'));
          return {
            success: true,
            code: res.status,
            result: {
              url: data.url.trim(),
              safe: data.safe === 'true',
              key: data.key,
              progress: '100%'
            }
          };
        }
      } catch (err) {
        const retry = ['ECONNRESET', 'ECONNABORTED', 'ETIMEDOUT'].includes(err.code);
        if (retry && attempt < maxAttempts) {
          process.stdout.write(chalk.yellow(`\rLemot bet dah... coba (${attempt}/${maxAttempts}) aja lagi yak 😂`));
          await new Promise(r => setTimeout(r, delay));
          continue;
        }
        console.log('\n' + chalk.red('Heumm... Videonya kagak ada bree ... belum jadi keknya :v'));
        return {
          success: false,
          code: err.response?.status || 500,
          result: {
            error: 'Error bree...',
            attempt
          }
        };
      }
    }
    console.log('\n' + chalk.red('Abis bree waktunyaa.. kelamaan njirr 🤣'));
    return {
      success: false,
      code: 504,
      result: {
        error: 'Proses videonya kelamaan, keknya lagi ngambek tuh Server AI nya wkwk... ',
        attempt
      }
    };
  }
};
 
 
let handler = async (m, { Mane, args, command }) => {
  try {
    if (!args[0]) return m.reply('Kasih Promt nya')
    let prompt = args.join(' ')
    switch (command) {
      case 'aivideo':
        var res = await aiLabs.generate({ prompt, type: 'video' })
        if (res?.result?.url) await Mane.sendMessage(m.chat, { video: { url: res.result.url } }, { quoted: m })
        break
      case 'aiimage':
        var res = await aiLabs.text2img(prompt)
        if (res?.result?.url) await Mane.sendMessage(m.chat, { image: { url: res.result.url } }, { quoted: m })
        break
    }
  } catch (e) {
    m.reply(e.message)
  }
}
 
handler.help = ['aivideo', 'aiimage']
handler.command = ['aivideo', 'aiimage']
handler.tags = ['ai']
 module.exports = handler