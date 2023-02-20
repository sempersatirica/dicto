---
layout: default
title: WriteString
summary: Writes a null-terminated string to output.
receives: EDX = address of string
returns: None
categories: general
---
{% highlight nasm %}
.data
prompt BYTE "Enter your name: ", 0

.code
mov  edx, OFFSET prompt
call WriteString        ; "Enter your name: "
call Crlf
{% endhighlight %}