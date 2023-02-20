---
layout: default
title: WriteInt
summary: Displays a 32-bit signed integer to output.
receives: EAX = integer
returns: None
categories: general
---
{% highlight nasm %}
.data
myInt SWORD 216543

.code
mov  eax, myInt
call WriteInt       ; displays: "+216543"
{% endhighlight %}