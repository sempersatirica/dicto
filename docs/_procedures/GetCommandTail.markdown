---
layout: default
title: GetCommandTail
summary: Copies the program’s command line into a null-terminated string.
receives: EDX = address of array ; array must be at least 129 bytes
returns: None
categories: general
---
{% highlight asm %}
.data
cmdTail BYTE 129 DUP(0)     ; empty buffer

.code
mov  edx,OFFSET cmdTail
call GetCommandTail         ; fills the buffer
{% endhighlight %}