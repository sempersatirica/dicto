---
layout: default
title: Str_compare
summary: Compares two strings, setting the Zero and Carry flags.
receives: 
    - PTR BYTE - first string 
    - PTR BYTE - second string
returns: CF and ZF are set according to the CMP instruction
categories: general
---
{% highlight nasm %}
.data
stringA   BYTE "abcde", 0
stringB   BYTE "xyz", 0

.code
push offset stringA
push offset stringB
call Str_compare
{% endhighlight %}