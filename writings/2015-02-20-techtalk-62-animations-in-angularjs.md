---
title: "TechTalk #62: Animations in AngularJS"
date: "2015-02-20"
categories:
  - "events"
tags:
  - "angular-js"
  - "jdv"
  - "techtalk"
---

_Hola!_

TechTalk minggu ini masih membahas javascript dan kali ini topiknya adalah _Animations in AngularJS_. Masih bersama mas Rijalul Fikri, _yeah_. Jadwal sebelumnya minggu ini topiknya MeteorJS, berhubung pembicaranya berhalangan jadinya mas Fikri yang turun tangan (ceritanya begitu).

Kali ini dijelasin dari basic animasi di web. Bukan animasi yang kompleks, bukan bahas `<canvas>` juga. Pertama dikenalkan dengan _transition_ di CSS. Lalu dibandingkan dengan _jQuery animate()_. Dan terakhir penerapan animasi di AngularJS.

What I learned:

- Gunakan properti yang ramah animasi: PROS (Position, Rotation, Opacity, Scale). [Referensi](http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)
- Gunakan [Animate.css](http://daneden.github.io/animate.css/) untuk efek-efek animasi yang umum digunakan
- Animasi dengan CSS lebih menghemat waktu dibanding JS, terutama untuk kasus sederhana seperti efek _hover_
- Angular #1: menggunakan modul [ngAnimate](https://docs.angularjs.org/api/ngAnimate) dan manual di CSS-nya
- Angular #2: modul [Hendrixer/ngFX](https://github.com/Hendrixer/ngFx) yang sudah bundled dengan ngAnimate dan Animate.css
- Angular #3: modul [cgwyllie/ngular-velocity](https://github.com/cgwyllie/angular-velocity), yang satu ini belum dibahas karena katanya terlalu panjang untuk dijelasin :|

Sip, minggu depan kita ke MeteorJS. :)
