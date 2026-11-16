const tombolMenu = document.querySelector(".menu-toggle");
const navigasi = document.querySelector(".nav-menu");

if (tombolMenu && navigasi) {
    tombolMenu.addEventListener("click", function () {

        navigasi.classList.toggle("active");

        const menuTerbuka =
            navigasi.classList.contains("active");

        tombolMenu.setAttribute(
            "aria-expanded",
            menuTerbuka
        );
    });
}

const formKontak = document.querySelector("#form-kontak");

if (formKontak) {
    formKontak.addEventListener("submit", function(event) {
        event.preventDefault();

        const pesanForm = document.querySelector("#pesan-form");

        if (formKontak.checkValidity()) {
            pesanForm.textContent =
                "Terima kasih! Formulir berhasil divalidasi.";

            pesanForm.className = "pesan-sukses";

            formKontak.reset();
        } else {
            pesanForm.textContent =
                "Mohon periksa kembali data yang kamu masukkan.";

            pesanForm.className = "pesan-error";

            formKontak.reportValidity();
        }
    });
}