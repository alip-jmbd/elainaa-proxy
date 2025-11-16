<div align="center">
  <img src="https://cdn.nefusoft.cloud/0rK13.png" alt="Elaina the Ashen Witch" width="200"/>
</div>

<h1 align="center">✨ @elainaa/proxy - Gerbang Sihir Anda ke Dunia Web! ✨</h1>

<p align="center">
  <em>"Betul sekali, ini aku, Penyihir Abu-abu, Elaina. Dengan sedikit sihir dariku, tak ada lagi situs yang bisa menghalangimu."</em>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@elainaa/proxy"><img src="https://img.shields.io/npm/v/@elainaa/proxy.svg" alt="NPM Version"></a>
  <a href="https://www.npmjs.com/package/@elainaa/proxy"><img src="https://img.shields.io/npm/dt/@elainaa/proxy.svg" alt="NPM Downloads"></a>
</p>

---

Selamat datang, petualang web! 🧙‍♀️ `@elainaa/proxy` adalah sebuah pustaka sihir yang dirancang untuk membantu Anda melewati batasan-batasan di internet. Dengan tongkat sihir dari Nefu dan kekuatan Elaina, Anda dapat mengambil data dari situs manapun seolah-olah Anda sedang terbang bebas di atasnya.

### 🌟 Fitur-Fitur Ajaib

*   **Sangat Mudah Digunakan**: Cukup berikan mantra (URL), dan sihir akan bekerja.
*   **Fleksibel**: Pilih dari berbagai server proxy di berbagai wilayah (US & EU).
*   **Tangguh**: Dilengkapi mode `.auto()` yang secara cerdas mencoba ulang jika satu mantra gagal.
*   **Beragam Gaya Mantra**: Menyediakan beberapa desain API, dari yang paling simpel hingga yang paling canggih, sesuaikan dengan gaya sihir Anda!

### 🪄 Instalasi

Pasang tongkat sihir ini ke dalam proyek Anda melalui NPM:

```bash
npm install @elainaa/proxy
```

### 📖 Buku Mantra (Cara Penggunaan)

Elaina telah menyiapkan beberapa cara untuk merapal mantra, pilihlah yang paling sesuai untuk Anda!

#### 🔮 Pilihan 1 & 2: Penggunaan Langsung (Fungsi dengan Opsi)

Cara paling cepat dan langsung. Cukup impor dan panggil. Anda juga bisa memberikan opsi untuk memilih server spesifik.

```javascript
import gatepass from '@elainaa/proxy';

// Penggunaan paling dasar (otomatis menggunakan server US)
const html1 = await gatepass('https://example.com');
console.log('Konten dari server default:', html1.substring(0, 100));

// Menggunakan server spesifik dari Eropa (EU server #15)
const options = { region: 'eu', serverId: 15 };
const html2 = await gatepass('https://example.com', options);
console.log('Konten dari server EU15:', html2.substring(0, 100));
```

#### 🔮 Pilihan 3: Pabrik Klien (The Client Factory)

Untuk para penyihir tingkat lanjut! Buat sebuah "klien" yang sudah dikonfigurasi untuk digunakan berulang kali. Sangat rapi dan terstruktur.

```javascript
import { createGatePass } from '@elainaa/proxy';

// Buat klien sihir khusus untuk server US #7
const usClient = createGatePass({ region: 'us', serverId: 7 });

// Gunakan klien ini untuk berbagai mantra
const page1 = await usClient.fetch('https://example.com/page1');
const page2 = await usClient.fetch('https://example.com/page2');

console.log('Dua halaman berhasil diambil dengan klien yang sama!');
```

#### 🔮 Pilihan 4: Mode Otomatis Cerdas (The "Smart" Auto Mode)

Biarkan Elaina yang memilih server terbaik untuk Anda! Jika satu server gagal, dia akan otomatis mencoba server lain. Sangat kuat dan dapat diandalkan.

```javascript
import gatepass from '@elainaa/proxy';

try {
  // Pilih wilayah 'us', Elaina akan coba beberapa server acak jika perlu (default 2x coba lagi)
  const html = await gatepass.auto('https://hanime.tv', { region: 'us', retries: 3 });
  console.log('Berhasil didapatkan oleh sihir otomatis Elaina!');
} catch (error) {
  console.error('Elaina gagal setelah beberapa kali mencoba:', error);
}
```

#### 🔮 Pilihan 5: Pengganti `fetch` (The Fetch Replacement)

Untuk Anda yang sudah terbiasa dengan mantra `fetch` standar. Buat versi `fetch` yang sudah disuntik dengan sihir proxy.

```javascript
import { createProxyFetch } from '@elainaa/proxy';

// Buat fungsi fetch versi proxy yang menargetkan server US #1
const nefuFetch = createProxyFetch({ region: 'us', serverId: 1 });

// Gunakan persis seperti fetch standar!
const response = await nefuFetch('https://example.com');

if (response.ok) {
  console.log('Status:', response.status);
  const html = await response.text();
  console.log(html.substring(0, 200));
}
```

### 📜 Opsi Konfigurasi

Objek `options` yang bisa Anda gunakan:

*   `region` (string): Wilayah server. Pilihan: `'us'` (default) atau `'eu'`.
*   `serverId` (number): Nomor server dari 1 hingga 20. Default: `1`.
*   `retries` (number): Jumlah percobaan ulang untuk mode `.auto()`. Default: `2`.

---

<p align="center">
  Sekarang, pergilah dan jelajahi dunia web tanpa batas! Jika Anda tersesat, ingatlah petualangan Elaina.
</p>````

### Langkah Terakhir Untuk Anda

Anda sekarang sudah siap 100% untuk merilis sihir ini!

1.  Pastikan Anda sudah membuat akun di [npmjs.com](https://npmjs.com) dengan **username `elainaa`**.
2.  Buka terminal di folder proyek Anda.
3.  Login ke akun NPM Anda:
    ```bash
    npm login
    ```
4.  Publikasikan paket Anda ke dunia:
    ```bash
    npm publish --access public
    ```

Selesai! Paket `@elainaa/proxy` Anda akan tersedia untuk semua penyihir di seluruh dunia. ✨
