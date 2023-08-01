// Contoh data siswa
const dataSiswa = [
    { nama: "Ahmad fauzi", nilai: 80 },
    { nama: "David", nilai: 60 },
    { nama: "fitiandi", nilai: 90 },
    { nama: "zaki", nilai: 75 },
  ];
  
  // Fungsi untuk menentukan status kelulusan
  const cekStatusKelulusan = (nilai) => (nilai >= 70 ? "Lulus" : "Tidak Lulus");
  
  // Filter data siswa yang lulus dan tidak lulus
  const siswaLulus = dataSiswa.filter((siswa) => siswa.nilai >= 70);
  const siswaTidakLulus = dataSiswa.filter((siswa) => siswa.nilai < 70);
  
  // Map untuk mengubah format data siswa
  const dataSiswaLulus = siswaLulus.map((siswa) => {
    return { nama: siswa.nama, nilai: siswa.nilai, status: cekStatusKelulusan(siswa.nilai) };
  });
  
  const dataSiswaTidakLulus = siswaTidakLulus.map((siswa) => {
    return { nama: siswa.nama, nilai: siswa.nilai, status: cekStatusKelulusan(siswa.nilai) };
  });
  
  // Fungsi untuk menampilkan data siswa ke dalam tabel
  const tampilkanDataSiswa = (data, tableId) => {
    const tableBody = document.getElementById(tableId);
    let html = '';
    data.forEach((siswa) => {
      html += `
        <tr>
          <td>${siswa.nama}</td>
          <td>${siswa.nilai}</td>
          <td>${siswa.status}</td>
        </tr>
      `;
    });
    tableBody.innerHTML = html;
  };
  
  // Panggil fungsi untuk menampilkan data siswa
  tampilkanDataSiswa(dataSiswaLulus, 'table-siswa-lulus');
  tampilkanDataSiswa(dataSiswaTidakLulus, 'table-siswa-tidak-lulus');
