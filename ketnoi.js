// --- CẤU HÌNH HỆ THỐNG ---
const linkApi = "https://script.google.com/macros/s/AKfycbwLFjHvjGSLMFvdGLYaj6W4Cu-Da3KFsLHBOgezQKtPwSzBT65CIaJG9frfS-vM7PVsTg/exec"; 
const hanDung = "31/12/2026"; 

async function goiMyChuHien(tenLenh, tLieu = {}) {
    tLieu.lenh = tenLenh;
    try {
        const ph = await fetch(linkApi, {
            method: 'POST',
            headers: {
                "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify(tLieu)
        });
        return await ph.json();
    } catch (loi) {
        console.error("Lỗi Fetch API:", loi);
        throw new Error("Lỗi kết nối mạng. Vui lòng kiểm tra lại!");
    }
}
