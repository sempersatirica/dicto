---
layout: default
title: Str_ucase
summary: Converts string to upper case.
receives: 
    - PTR BYTE - string to convert
returns: PTR BYTE - upper case string
categories: general
---
{% highlight nasm %}
.data
string   BYTE "abcde", 0

.code
push offset string
call Str_ucase
{% endhighlight %}