---
layout: default
title: ReadHex
summary: Reads a 32-bit hexadecimal integer from the keyboard.
receives: None
returns: EAX = integer
categories: general
---
{% highlight asm %}
.data
hexVal DWORD ?

.code
call ReadHex
mov  hexVal,eax
{% endhighlight %}