---
layout: default
title: WriteBin
summary: Writes an integer to the console window in ASCII binary format.
receives: EAX = integer
returns: None
categories: general
---
{% highlight asm %}
mov  eax,12346AF9h
call WriteBin
{% endhighlight %}