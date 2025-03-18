---
title: "Array Dereference in PHP 5.4"
date: "2014-01-24"
categories: 
  - "development"
---

Found this out when deploying my new app into server. I used PHP 5.4 in my local machine, and unfortunately its 5.3 in my server. The app was blank and the log inform me:

```
PHP Parse error:  syntax error, unexpected '[', expecting ')' in /some/file.php on line 114
```

We need a temporary variable to fix it:

```php
// a function returning array()
getAll() {
    return array( 1, 2, 3 );
}

// in PHP 5.4, we can simply:
$first_number = getAll()[0];

// my fix:
$numbers = getAll();
$first_number = $numbers[0];
```
