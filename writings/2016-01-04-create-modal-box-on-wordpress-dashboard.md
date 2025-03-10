---
title: "Create A Modal Box on WordPress Dashboard"
date: "2016-01-04"
categories:
  - "development"
  - "wordpress"
tags:
  - "wordpress"
  - "wordpress-admin"
cover: "add-new-customer-modal.png"
---

Recently I was writing a plugin for a client. It was a simple plugin to manage invoices and customers. The development is pretty fast thanks to Elliot Condon for his awesome [ACF plugin](https://wordpress.org/plugins/advanced-custom-fields/).

One of the plugin's requirement is user can add a new customer directly from the invoice page. As default, I put a post object field for user to select the existing customer. So I decided to put the add new customer form in a modal box. And after some while looking for, I finally found how to create it using WordPress' bundled Thickbox.

### Enqueueing Thickbox Libraries

First, we need to enqueue Thickbox's JS and CSS with simply:

```php
add_thickbox();
```

### Create A Trigger Button

Then we need a button to trigger the popup when it's clicked. It must have `.thickbox` class so the javascript can handle it properly. To have it button-like visual, append `.button` class.

Next part is building the URL. It consists of 4 important query args: `action`, `TB_iframe`, `width`, and `height`. The action value determines our hook when creating the page. So here how the button looks like:

```php
$url = add_query_arg( array(
    'action'    => 'foo_modal_box',
    'TB_iframe' => 'true',
    'width'     => '600',
    'height'    => '400'
), admin_url( 'admin.php' ) );

echo '<a href="' . $url . '" class="button button-primary thickbox">' . __( 'Add New Customer', 'foo' ) . '</a>';
```

In code above, we use `add_query_arg()` to build our URL. The result would be: **_http://local.dev/wp-admin/admin.php?action=foo\_modal\_box&TB\_iframe=true&width=600&height=400_**

### Create the Page

We'll hook to `admin_action_{$action}` to create our page. By default, we'll get a blank response when requesting to that page. We can simply testing with an echo and exit.

```php
function foo_render_action_page() {
    define( 'IFRAME_REQUEST', true );
    iframe_header();

    // ... your content here ...
    iframe_footer();
    exit;
}
add_action( 'admin_action_foo_modal_box', 'foo_render_action_page' );
```

Note the `IFRAME_REQUEST` constant, it will remove extra 32px top padding of the `<html>` added by `.wp-toolbar`.

[`iframe_header()`](https://developer.wordpress.org/reference/functions/iframe_header/) and [`iframe_footer()`](https://developer.wordpress.org/reference/functions/iframe_footer/) work like `wp_head()` and `wp_footer()` on theme. They will output base HTML page tailored for iframe view. That means no admin bar, no admin menu, just empty page.

Alright, go on and try clicking our button. TADAA! :)
