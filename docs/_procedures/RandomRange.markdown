---
layout: default
title: RandomRange
summary: Produces a random integer within a range.
receives: EAX = upper limit (exclusive)
returns: EAX = random integer
categories: general
---
{% highlight nasm %}
.data
randVal DWORD ?

.code
mov  eax, 5000
call RandomRange    ; generates 0 - 4999
mov  randVal, eax
{% endhighlight %}