---
layout: default
title: ReadString
summary: Reads a string from the keyboard, stopping when the user presses the Enter key.
receives: 
    - EDX = address of buffer
    - ECX = buffer size
returns: 
    - EDX = address of user string
    - EAX = number of characters entered
categories: general
---
{% highlight nasm %}
.data
buffer    BYTE 21 DUP(0) ; input buffer
byteCount DWORD ?        ; holds counter

.code
mov  edx,OFFSET buffer   ; point to the buffer
mov  ecx,SIZEOF buffer   ; specify max characters
call ReadString          ; input the string
mov  byteCount,eax       ; number of characters
{% endhighlight %}