---
title: "TechTalk #85: Latest Frontend Technology"
date: "2016-02-04"
categories:
  - "events"
tags:
  - "front-end"
  - "jdv"
  - "techtalk"
cover: "frontend-techs.png"
---

Akhirnya, setelah sekian lama, TechTalk muncul lagi. Dan tau-tau udah episode 85. :D. Saya agak telat sih, jadi kurang tau yang bagian depan. Ohya materi episode ini _Latest Frontend Technology_ yang dibawakan oleh Mas Rijalul Fikri.

### Build Tools

Saya masuk udah sampai bagian build tools. Di presentasinya, sekarang ini build tools bisa dibagi menjadi 3 generasi:

1. **First Gen.** Kita mengenal `make` untuk proses build.
2. **Second Gen.** Yang masuk di sini ada [Grunt](http://gruntjs.com/), [Gulp](http://gulpjs.com/), [Broccoli](http://broccolijs.com/), dll.
3. **Third Gen.** Ada [Browserify](http://browserify.org/), [Webpack](https://webpack.github.io/), [JSPM](http://jspm.io/).

Jaman Grunt masih baru dulu, saya ngga tau itu gunanya buat apa. Lama kelamaan jadi tau, dengan Grunt kita bisa compile SCSS/Less ke CSS, optimize image, dan copy resources dengan sekali perintah di terminal. Tapi yang paling terasa dari Grunt adalah **waktu prosesnya lama** karena tiap hasil dari proses akan di-_write_ ke hardisk, lalu di-_read_, baru diproses selanjutnya, dan begituseterusnya sampai porses terakkhir. Nah dari situ muncul Gulp. Di Gulp hasil dari proses akan di-_pipe_ ke proses lain dan baru akan di-_write_ pada proses terakhir.

Tapi belakangan muncul juga tren menggunakan NPM langsung sebagai build tool. Alasannya lebih simpel dan tidak perlu file config yang kadang kita malah lebih sibuk ngurusin confignya. :p Bisa dibaca di:

- [How to Use NPM as a Built Tool](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)
- [Introduction to Using NPM as a Built Tool](https://medium.com/@dabit3/introduction-to-using-npm-as-a-build-tool-b41076f488b0#.781tqq7h4)

Browserify saya masih sebatas baca-baca situsnya. Webpack baru coba sore ini gegara kebelet ngetes VueJS. JSPM baru denger kemarin dan setelah dibuka webnya baru inget pernah buka ini. :|

### Live Editing

Bahasan selanjutnya ada tentang live editing. Mas Fikri juga membagi ini jadi 3:

1. **First Gen.** *Our good ol' friend*, `ctrl-r`.
2. **Second Gen.** Masuk kategori ini [LiveReload](http://livereload.com/) dan [BrowserSync](https://www.browsersync.io/).
3. **Third Gen.** Hot Reload.

Untuk LiveReload saya belum pernah pakai. BrowserSync pernah sebatas coba-coba. Hot Reload? Baru ngetren belakangan, belum sempat baca-baca. Bahkan saya ragu nulis istilahnya dengan benar. :/

Di second gen. kita dienakkan dengan refresh browser otomatis ketika kita menyimpan file. Nah kalau hot reload, browser sama sekali enggak refresh, tapi kontennya berubah, tapi statenya tetep, karena semua perubahan ada di memori (begitu kata mas Fikri).

_**Todo:**_ ngulik lebih jauh tentang hot reload

### React

Siapa yang nggak tau React? *A JavaScript library for building user interfaces.* :|

Library yang lagi ngetren di kalangan frontenders. Pertama saya tau dan baca-baca React beberapa bulan lalu, langsung bingung dengan HTML di dalam javascript, yang belakangan ternyata itu namanya JSX. Saya belum ngulik jauh sih, dan belum nemu alasan yang pas kenapa saya harus pakai React. Kalau saya lihat soalnya ini _njlimet._ Belum lagi ES6 yang juga baru dengar belakangan ini.

---

Kalau bicara frontend kayanya banyak banget tool-tool atau library baru yang terus bermunculan, bahkan mungkin kita belum sempat ngulik ini, itu udah rilis dan terlihat lebih seksi. Tapi tantangan sih biar kita terus belajar dan nggak ketinggalan kereta. :)

Boleh dibuka: [How to Keep Up to Date on Front-End Technologies](https://uptodate.frontendrescue.org/)
