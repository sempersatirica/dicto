---
layout: default
title: Str_trim
summary: Removes occurances of a character from the end of a string.
receives: 
    - PTR BYTE - string to trim
    - CHAR - character to remove
returns: PTR BYTE - trimmed string
categories: general
---
{% highlight nasm %}
.data
string   BYTE "abcde###", 0
target   CHAR '#'

.code
push target
push offset string
call Str_trim
{% endhighlight %}