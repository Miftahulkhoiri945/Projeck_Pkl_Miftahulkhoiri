// Kalkulator Biasa
function appendToDisplay(value) {
    let display = document.getElementById('display');
    display.value += value;
}

function calculate() {
    let display = document.getElementById('display');
    let errorMessage = document.getElementById('error-message');
    try {
        // Coba untuk menghitung ekspresi matematika
        let result = eval(display.value);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error("Invalid input");
        }
        display.value = result;
    } catch (error) {
        // Tampilkan pesan error jika terjadi kesalahan
        errorMessage.textContent = "Input salah, periksa kembali!";
    }
}

function clearDisplay() {
    let display = document.getElementById('display');
    let errorMessage = document.getElementById('error-message');
    display.value = '';
    errorMessage.textContent = ''; // Kosongkan pesan error
}

function deleteLastDigit() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Menghapus karakter terakhir
}
