---
layout: default
title: Str_length
summary: Returns the length of a null-terminated string.
receives: EDX = address of string
returns: EAX = string length
categories: general
---
{% highlight nasm %}
.data
buffer    BYTE "abcde",0
bufLength DWORD ?

.code
mov  edx,OFFSET buffer  ; point to string
call Str_length         ; EAX = 5
mov  bufLength,eax      ; save length
{% endhighlight %}