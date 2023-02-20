---
layout: default
title: WriteBinB
summary: Writes a 32-bit integer to the console window in ASCII binary format.
receives: 
    - EAX = integer
    - EBX = display size (1,2, or 4)
returns: None
categories: general
---
{% highlight nasm %}
mov  eax, 1234h
mov  ebx, TYPE WORD
call WriteBinB
{% endhighlight %}