# Website DISPENAD IRAF

Website Official Military Roleplay ROBLOX — Dinas Penerangan (DISPENAD), Indonesian Republic Armed Forces.

## Isi folder
- `index.html` — seluruh website (tampilan, pendaftaran, panel admin)
- `google-apps-script.gs` — penerima data pendaftar ke Google Sheets
- `README.md` — panduan ini

## Cara mencoba di komputer
Ekstrak folder, lalu klik dua kali `index.html`. Website langsung terbuka di browser.

## Yang wajib diubah (di bagian `CONFIG` dalam index.html)
1. `ADMIN_PASSWORD` — ganti password admin.
2. `DIVISI`, `DIVISI_IRAF`, `PANGKAT` — sesuaikan dengan struktur IRAF.
3. `SHEET_ENDPOINT` — isi URL Google Apps Script (lihat di bawah).

## Menyambungkan pendaftaran ke Google Sheets
1. Buat Google Sheet baru, buka Extensions > Apps Script.
2. Tempel isi `google-apps-script.gs`, lalu simpan.
3. Deploy > New deployment > tipe Web app. Execute as: Me. Who has access: Anyone.
4. Salin URL Web App ke `SHEET_ENDPOINT` di index.html.

## Cara online gratis
Upload folder ke Netlify (drag & drop), GitHub Pages, atau Cloudflare Pages.
Lalu daftarkan alamat websitenya ke Google Search Console agar muncul di Google.

## Catatan
- Data admin (personel, galeri, banner) saat ini disimpan di browser (localStorage), bukan server. Untuk data bersama antar admin, gunakan database seperti Firebase atau Supabase.
- Password admin di kode bisa dibaca orang yang membuka source. Cukup untuk uji coba, belum aman untuk produksi.
- Website ini komunitas fiksi/roleplay, tidak berafiliasi dengan ROBLOX Corporation maupun institusi TNI yang sebenarnya.
