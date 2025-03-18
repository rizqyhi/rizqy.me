---
title: "Let Contributor Edit Their Published Posts on WordPress"
date: "2012-01-31"
categories:
  - "development"
  - "wordpress"
tags:
  - "wordpress"
---

Yesterday, I asked by a friend to publish his post at [Blogazinist](http://blogazinist.com) (dead). I published it then, and realized that the post was not the final yet. He wanted to edit it, so I pending that post again. And had been doing those activity for many times.

By default, we set registered user on Blogazinist as a contributor. After reading a while at WordPress Codex about User Roles and Capabilities, I knew that contributor can edit their posts, but not after it’s published. Then I scrolling down `edit_published_posts` capability. Then I thought to add that capability to contributor role.

We all knew, WordPress gives easy way to modify its core functions by hooking to that function. So, to achieve that, I hooked to `admin_init` function. Also using `get_role` function to get contributor role and add a new capability on it.

```php
function contributor_edit_published() {
    $contributor = get_role('contributor');
    $contributor->add_cap('edit_published_posts');
}
add_action('admin_init', 'contributor_edit_published');
```

By now, Blogazinist’s contributor could edit their published posts. :)

References:

- [WordPress Codex: Roles and Capabilities](http://codex.wordpress.org/Roles_and_Capabilities)
- [WordPress Codex: `get_role`](http://codex.wordpress.org/Function_Reference/get_role)
- [WordPress Codex: `add_cap`](http://codex.wordpress.org/Function_Reference/add_cap)
