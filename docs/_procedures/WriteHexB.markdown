---
layout: default
title: WriteHexB
summary: Writes a 32-bit unsigned integer to output in hexidecimal.
receives: 
    - EAX = integer
    - EBX = display size (1,2, or 4)
returns: None
categories: general
---
{% highlight asm %}
mov  eax,7FFFh
mov  ebx, TYPE WORD
call WriteHexB       ; displays: "7FFF"
{% endhighlight %}