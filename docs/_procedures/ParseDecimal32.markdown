---
layout: default
title: ParseDecimal32
summary: Converts an unsigned decimal integer string to 32-bit binary.
receives: 
    - EDX = address of string
    - ECX = length of string
returns: EAX = parsed integer
categories: general
---
{% highlight nasm %}
.data
buffer BYTE "8193"
bufSize = ($ - buffer)

.code
mov  edx,OFFSET buffer
mov  ecx,bufSize
call ParseDecimal32 ; returns EAX
{% endhighlight %}