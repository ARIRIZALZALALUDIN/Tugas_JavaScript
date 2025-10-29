function hitungDiskon(harga, persen) {
    return harga - (harga * persen / 100);
}

module.exports = hitungDiskon;