---
title: "Belajar Menggunakan Bower"
date: "2015-12-01"
categories:
  - "development"
tags:
  - "bower"
  - "front-end"
---

Bower adalah salah satu _package manager_ untuk pengembangan _front-end_ web. Sesuai kategorinya, Bower berfungsi untuk memudahkan kita mengatur paket atau library apa saja yang kita butuhkan saat mendevelop suatu aplikasi, dalam hal ini _front-end_ (css/js). Kita tidak perlu repot untuk mendownload library satu-per-satu ketika akan menggunakannya. Begitu juga ketika ada versi baru dari library tersebut. Cukup dengan mengetikkan satu perintah dan _voila_, semuanya akan terdownload secara otomatis.

Hampir semua library yang terdapat di repositori publik dapat diambil menggunakan Bower. Biasanya repo-repo ini ditempatkan di Github oleh pemiliknya dan bersifat open-source. Nah sekarang kita coba untuk menggunakan Bower.

### Install Git dan NodeJS

Ada 2 software yang menjadi ketergantungan si Bower ini, yaitu Git dan NodeJS. Jadi silahkan install terlebih dulu kedua software Keduanya bisa diperoleh di:

- [Git](http://git-scm.com/)
- [Download NodeJS](http://nodejs.org/download/) atau [untuk pengguna Linux](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)

### Install Bower

Untuk menginstall bower, kita menggunakan NPM (_Node Package Manager_) yang sudah terpasang saat kita menginstall NodeJS. FYI, NPM ini cara kerjanya juga sama dengan Bower. :D Kita pasang Bower dengan perintah berikut:

```sh
npm install -g bower
```

Jika muncul error permission denied, jalankan lagi perintah itu dengan `sudo`.

### Menggunakan Bower

Sebelumnya pindah dulu ke direktori proyek kita. Jika kita memulai proyek baru, maka bisa menggunakan perintah:

```sh
bower init
```

Kemudian kita akan diberikan _wizard_ untuk mengisi beberapa detail tentang proyek kita (_kepo deh_). Setelah itu kita bisa menginstall paket-paket yang kita butuhkan. Misal kita akan menginstall Twitter Bootstrap:

```sh
bower install bootstrap --save
```

Perintah ini otomatis akan men-download semua file Bootstrap yang siap digunakan. Tidak ketinggalan juga library yang dibutuhkan Bootstrap, seperti jQuery, juga akan otomatis ter-download. Dengan opsi `--save` maka library yang kita install otomatis akan ditambahkan ke file `bower.json`. Kita bisa mengedit file ini langsung kemudian jalankan perintah:

```sh
bower install
```

Maka semua library yang tertulis di `bower.json` akan di-download, dan lagi-lagi secara otomatis juga men-download apa yang mereka butuhkan. _Awesome!_ :o

Lebih jauh tentang Bower, mangga dicek di webnya [bower.io](http://bower.io). :))

_**P.S**_. Mas Rahmat Awaludin punya video bagus buat kenalan dengan Bower di [Malescast](https://malescast.com/screencast/bower-buat-frontend-developer/).
