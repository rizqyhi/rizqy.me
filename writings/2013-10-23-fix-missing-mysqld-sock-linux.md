---
title: "Fix Missing Mysqld.sock on Linux"
date: "2013-10-23"
categories:
  - "development"
---

Hi! It's been a long time since my last post. Why I wrote this? It’s because I got this error last night and it annoyed me so much. Well, I’ve ever got the same error, several months ago.

Alright, the error is kind like this:

```
ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/var/run/mysqld/mysqld.sock' (2)
```

We could find that error from PHP error notice or from Terminal when we try to open MySQL connection.

After some hours of Googling, and have no result, I tried my own way. I took it from several sources. And here's how:

1. You have to use your `root` access
2. Change the directory to `/var/run/mysqld`

   ```sh
   cd /var/run/mysqld
   ```

3. Create an empty `mysqld.sock` file

   ```sh
   touch mysqld.sock
   ```

4. Give executable permission to sock file

   ```sh
   chmod +x mysqld.sock
   ```

5. Change permission to `mysql` user

   ```sh
   chown mysql:mysql -R *
   ```

6. Change the working directory to `/tmp`

   ```sh
   cd /tmp
   ```

7. Create a symlink to the sock file

   ```sh
   ln -s /var/run/mysqld/mysqld.sock mysqld.sock
   ```

8. And at last, run the `MySQL /etc/init.d/mysql` start.

Yeah, my db is up now. :)
