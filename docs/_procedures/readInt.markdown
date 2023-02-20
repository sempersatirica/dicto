---
layout: default
title: ReadInt
summary: Reads a 32-bit signed integer from the keyboard.
receives: None
returns: EAX = integer
categories: general
---
{% highlight nasm %}
.data
intVal SDWORD ?

.code
call ReadInt
mov  intVal,eax
{% endhighlight %}