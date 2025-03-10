---
title: "Deploy via FTP dengan Yarn dan ftp-deploy"
date: "2018-02-01"
categories:
  - "development"
tags:
  - "front-end"
  - "javascript"
cover: "Screen-Shot-2018-01-31-at-01.27.15.png"
---

Sebelumnya untuk deploy via FTP, saya biasa menggunakan [git-ftp](https://github.com/git-ftp/git-ftp). Untuk proyek-proyek backend, git-ftp sangat pas untuk kebutuhan saya biar nggak perlu pilih file 1-1 yang perlu diunggah. Ini karena git-ftp memanfaatkan _commit_ git untuk menentukan file mana saja yang akan diunggah.

Tapi ketika saya mengerjakan proyek frontend, maka semua file source juga akan terunggah karena masuk di _commit_. Sedangkan yang saya inginkan hanya file-file di dalam folder `dist` hasil compile webpack. Dari situ saya coba buat cari _package_ FTP di NodeJS dan menemukan [ftp-deploy](https://www.npmjs.com/package/ftp-deploy).

Saya hanya butuh file-file saya terunggah dengan baik dan tampilan yang cantik di terminal. Konfigurasi lain-lain tidak terlalu butuh sih. Jadi saya coba _explore package_ [chalk](https://www.npmjs.com/package/chalk) dan [ora](https://www.npmjs.com/package/ora). Chalk ini sangat _useful_ untuk membuat terminal jadi warna-warni. Dan ora memberikan _loading spinner_ cantik seperti yang dipakai Yarn.

Dan ini adalah _deploy script_ yang saya buat:

```js
const FtpDeploy = require("ftp-deploy");
const chalk = require("chalk");
const ora = require("ora");
const logSymbols = require("log-symbols");
const deployer = new FtpDeploy();

const config = {
  username: "your-ftp-username",
  password: "your-ftp-password",
  host: "your-server.com",
  port: 21,
  localRoot: __dirname + "/dist",
  remoteRoot: "/",
  exclude: [".DS_Store"],
};

console.log(chalk.blue("Launching deploy ship..."));
console.log(chalk.blue("========================"));

const spinner = ora("Contacting server").start();

deployer.deploy(config, function (err) {
  if (err) {
    spinner.fail(chalk.red("ERROR") + " " + err.message);
    process.exit(1);
  } else {
    console.log(chalk.green(logSymbols.success + " DEPLOY SUCCESS"));
    process.exit();
  }
});

deployer.on("error", function (err) {
  spinner.fail(chalk.red("ERROR") + " " + err.message);
});

const progress = {};

deployer.on("uploading", function (data) {
  if (data.transferredFileCount < 1) spinner.succeed("Start uploading process");

  progress[data.filename] = ora(
    "[ " +
      (data.transferredFileCount + 1) +
      "/" +
      data.totalFileCount +
      " ] " +
      data.filename,
  ).start();
});

deployer.on("uploaded", function (data) {
  progress[data.filename].succeed();
});
```

Outputnya seperti di screenshot di atas. Ohya, tinggal tambahkan `"deploy": "node deploy.js"` di bagian `scripts` di `package.json` dan jalankan dengan `yarn run deploy` biar dapat bonus _running time_ dari Yarn.
