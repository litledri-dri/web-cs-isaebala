
    const passInput = document.getElementById('passInput');
    const eyes = document.querySelectorAll('.eye');
    const loginBtn = document.getElementById('login-Btn');
    const lampShade = document.getElementById('lamp-Shade');
    const lightBeam = document.getElementById('light-Beam');
    const lampSection = document.getElementById('lampSection');

    // 1. Reaksi saat mengisi password (mata menyempit)
    passInput.addEventListener('focus', () => {
        eyes.forEach(eye => eye.classList.add('eye-narrow'));
    });

    passInput.addEventListener('blur', () => {
        eyes.forEach(eye => eye.classList.remove('eye-narrow'));
    });

    // 2. Reaksi saat tombol login diklik
    loginBtn.addEventListener('click', () => {
        // Tambah class animasi & warna
        lampShade.classList.add('success-lamp');
        lightBeam.classList.add('success-beam');
        lampSection.classList.add('jump-anim');

        // Reset setelah 1 detik
        setTimeout(() => {
            lampShade.classList.remove('success-lamp');
            lightBeam.classList.remove('success-beam');
            lampSection.classList.remove('jump-anim');
        }, 1000);
    });