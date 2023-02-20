---
layout: default
title: GetMaxXY
summary: Gets the size of the console window’s buffer.
receives: None
returns:
    - DX = number of columns ; max 255
    - AX = number of rows ; max 255
categories: general
---
{% highlight nasm %}
.data
rows BYTE ?
cols BYTE ?

.code
call GetMaxXY
mov rows,al
mov cols,dl
{% endhighlight %}