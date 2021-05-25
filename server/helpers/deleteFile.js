const fs = require('fs')

function delFile(img) {
    console.log(img)
    fs.unlink(img, (err) => {
        console.log(err)
        if (err) return `Terjadi kesalahan:${err}`
        console.log(`${img} berhasil dihapus!`);
    });
}
module.exports = delFile