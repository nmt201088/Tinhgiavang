function tinhTien() {
    let sellPrice9999 = parseFloat(document.getElementById("nhapGia").value);
    let weight = parseFloat(document.getElementById("canNang").value);
    let loaiVang = document.getElementById("loaiVang").value;
    let cong = parseFloat(document.getElementById("tienCong").value);

    // Kiểm tra đầu vào
    if (!sellPrice9999 || sellPrice9999 <= 0) {
        document.getElementById("ketQua").innerText = "Nhập giá bán ra 9999 hợp lệ!";
        return;
    }
    if (!weight || weight <= 0) {
        document.getElementById("ketQua").innerText = "Nhập cân nặng hợp lệ!";
        return;
    }
    if (!cong || cong < 0) {
        document.getElementById("ketQua").innerText = "Nhập tiền công hợp lệ!";
        return;
    }

    // Quy đổi cân nặng sang chỉ (100 = 1 chỉ)
    let chi = weight ;

    // Tính giá bán ra theo loại vàng
    let sellPrice;
    switch (loaiVang) {
        case "9999":
            sellPrice = sellPrice9999;
            break;
        case "980":
            sellPrice = (sellPrice9999 * 0.985) / 0.9999;
            if (sellPrice % 10000 > 0) sellPrice = Math.ceil(sellPrice / 10000) * 10000;
            break;
        case "950":
            sellPrice = (sellPrice9999 * 0.95) / 0.9999;
            if (sellPrice % 10000 > 0) sellPrice = Math.floor(sellPrice / 10000) * 10000;
            break;
        case "610":
            sellPrice = (sellPrice9999 * 0.63) / 0.9999;
            if (sellPrice % 10000 > 0) sellPrice = Math.ceil(sellPrice / 10000) * 10000;
            break;
        case "680":
            sellPrice = (sellPrice9999 * 0.7) / 0.9999;
            if (sellPrice % 10000 > 0) sellPrice = Math.ceil(sellPrice / 10000) * 10000;
            break;
        default:
            sellPrice = 0;
    }

    // Tính tiền sản phẩm, không làm tròn
    let total = (chi * sellPrice) + (cong*1000);

    document.getElementById("ketQua").innerText = `Giá tiền sản phẩm: ${total.toLocaleString()} đồng`;
}
