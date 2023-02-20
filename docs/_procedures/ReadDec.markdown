---
layout: default
title: ReadDec
summary: Reads a 32-bit unsigned decimal integer from the keyboard.
receives: None
returns: 
    - EAX = unsigned integer
    - CF = 1 if value is zero or invalid, else 0
categories: general
---
{% highlight nasm %}
.data
intVal DWORD ?

.code
call ReadDec
mov  intVal,eax
{% endhighlight %}