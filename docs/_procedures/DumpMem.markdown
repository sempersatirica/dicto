---
layout: default
title: DumpMem
summary: Writes a range of memory to the console window in hexadecimal.
receives:
    - ESI = starting address
    - ECX = number of units
    - EBX = unit size (1,2, or 4)
returns: None
categories: general
---
{% highlight nasm %}
.data
array DWORD 1,2,3,4,5,6,7,8,9,0Ah,0Bh

.code
mov  esi,OFFSET array        ; starting OFFSET
mov  ecx,LENGTHOF array      ; number of units
mov  ebx,TYPE array          ; doubleword format
call DumpMem
{% endhighlight %}