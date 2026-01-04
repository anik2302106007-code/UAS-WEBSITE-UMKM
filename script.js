const products = [
    { nama: "Abon Ikan Tuna",       harga: "Rp30.000", img: "img/produk1.png" },
    { nama: "Keripik Kelapa",       harga: "Rp20.000", img: "img/produk2.jpg" },
    { nama: "Tahu Tuna",            harga: "Rp25.000", img: "img/produk3.png" },
    { nama: "sale pisang madu",     harga: "Rp20.000", img: "img/produk4.jpeg" },
    { nama: "Basreng Tuna",         harga: "Rp30.000", img: "img/produk5.png" }
];

const productList = document.getElementById("product-list");

products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${p.img}">
        <h3>${p.nama}</h3>
        <p>${p.harga}</p>
    `;
    productList.appendChild(card);
});

function validateForm() {
    const nama = document.getElementById("nama").value;
    const pesan = document.getElementById("pesan").value;

    if (nama === "" || pesan === "") {
        alert("Nama dan pesan wajib diisi!");
        return false;
    }
    alert("Pesan berhasil dikirim!");
    return true;
}
