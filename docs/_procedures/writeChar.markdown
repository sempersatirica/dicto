---
layout: default
title: WriteChar
summary: Displays a character to the output.
receives: AL = character
returns: None
categories: general
---
{% highlight nasm %}
.data
myChar CHAR '+'

.code
mov  al, '+'
call WriteChar
{% endhighlight %}