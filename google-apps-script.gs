/**
 * Penerima pendaftaran DISPENAD IRAF -> Google Sheets
 * Cara pakai:
 * 1. Buat Google Sheet baru, buka Extensions > Apps Script.
 * 2. Tempel kode ini, simpan.
 * 3. Deploy > New deployment > tipe "Web app"
 *    Execute as: Me | Who has access: Anyone
 * 4. Salin URL Web App, tempel ke CONFIG.SHEET_ENDPOINT di index.html.
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var d = JSON.parse(e.postData.contents);
  var headers = ["id","tanggal","username","display","nama","umur","discord","bidang","aktif","exp","alasan","skill","porto","status"];
  if (sheet.getLastRow() === 0) sheet.appendRow(headers);
  sheet.appendRow(headers.map(function (h) { return d[h] || ""; }));
  return ContentService.createTextOutput("OK");
}
