---
layout: default
title: WriteToFile
summary: Writes the contents of a buffer to an output file.
receives: 
    - EAX = file handle
    - EDX = address of buffer
    - ECX = number of bytes to write
returns: EAX = number of bytes written (0 if error)
categories: file
---
{% highlight nasm %}
BUFFER_SIZE = 5000
.data
fileHandle DWORD ?
buffer BYTE BUFFER_SIZE DUP(?)

.code
mov  eax, fileHandle
mov  edx, OFFSET buffer
mov  ecx, BUFFER_SIZE
call WriteToFile
{% endhighlight %}