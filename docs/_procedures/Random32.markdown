---
layout: default
title: Random32
summary: Generates and returns a 32-bit random integer.
receives: None
returns: EAX = random integer
categories: general
---
{% highlight nasm %}
.data
randVal DWORD ?

.code
call Random32
mov  randVal,eax 
{% endhighlight %}