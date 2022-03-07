const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = "BEGIN:VCARD\nVERSION:3.0\nN:1;FuadBot-MD;;;\nFN:FuadBot-MD\nitem1.TEL;waid=6285867185837:+62 858-6718-5837\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:FuadBot-MD\nEND:VCARD"
                conn.sendMessage(m.chat, { contacts: { contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
