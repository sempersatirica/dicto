---
layout: default
title: Delay
summary: Pauses the program for a number of milliseconds.
receives: EAX = number of milliseconds
returns: None
categories: general
---
{% highlight nasm %}
mov  eax,1000       ; 1 second
call Delay
{% endhighlight %}