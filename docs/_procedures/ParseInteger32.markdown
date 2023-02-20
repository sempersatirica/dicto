---
layout: default
title: ParseInteger32
summary: Converts an signed decimal integer string to 32-bit binary.
receives: 
    - EDX = address of string
    - ECX = length of string
returns: EAX = parsed integer
categories: general
---
{% highlight nasm %}
.data
buffer BYTE "-8193"
bufSize = ($ - buffer)

.code
mov  edx,OFFSET buffer
mov  ecx,bufSize
call ParseInteger32 ; returns EAX
{% endhighlight %}