const passInput = document.getElementById('passInput');
    const eyes = document.querySelectorAll('.eye');
    const loginBtn = document.getElementById('loginBtn');
    const lampShade = document.getElementById('lampShade');
    const lightBeam = document.getElementById('lightBeam');
    const lampSection = document.getElementById('lampSection');

    // 1. Reaksi saat mengisi password (mata menyempit)
    passInput.addEventListener('focus', () => {
        eyes.forEach(eye => eye.classList.add('eye-narrow'));
    });

    passInput.addEventListener('blur', () => {
        eyes.forEach(eye => eye.classList.remove('eye-narrow'));
    });

    // 2. Reaksi saat tombol login diklik
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const loader = document.getElementById('loader-wrapper');
        loader.style.display = 'flex';
        lampShade.classList.add('success-lamp');
        setTimeout(() => {
            window.location.href = "../sb ADMIN/admin.html";
        }, 3000);
        });
       
    // penambahan greeeting
    const greetingElement = document.getElementById('greeting-text');
    const jam = new Date().getHours();

    if (jam >= 6 && jam <9) {
        greetingElement.innerText = "selamat pagi! siap kontrol area hari ini?";
    } else if (jam >= 10 && jam < 14) {
        greetingElement.innerText = "selamat siang! mau cek apa hari ini adriansyah?";
    } else if (jam >= 14 && jam < 17.30) {
        greetingElement.innerText = " selamat sore! jangan lupa input data pengecekan area ya.";
    } else {
        greetingElement.innerText = "malam, adriansyah. butuh pencahayaan yang nyaman?";
    }
