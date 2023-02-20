---
layout: default
title: GetMseconds
summary: Gets the number of milliseconds elapsed since midnight on the host computer.
receives: None
returns: EAX = time in milliseconds
categories: general
---
{% highlight nasm %}
.data
    startTime DWORD ?

.code
    call GetMseconds
    mov  startTime,eax

L1:
    loop L1
    call GetMseconds
    sub  eax,startTime      ; EAX = loop time, in milliseconds
{% endhighlight %}