---
layout: default
title: Gotoxy
summary: Move the cursor at a given row and column in the console window.
receives: 
    - DH = X coordinate (column)
    - DL = Y coordinate (row)
returns: None
categories: general
---
{% highlight nasm %}
mov  dh,10          ; row 10
mov  dl,20          ; column 20
call Gotoxy         ; locate cursor
{% endhighlight %}