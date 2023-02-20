---
layout: default
title: ReadFromFile
summary: Reads an input disk file into a memory buffer.
receives: 
    - EAX = open file handle
    - EDX = address of buffer
    - ECX = buffer size
returns: 
    - EAX = bytes read (CF = 0) or error (CF = 1)
    - CF = error indicator
categories: file
---
{% highlight nasm %}
.data
BUFFER_SIZE = 5000
buffer BYTE BUFFER_SIZE DUP(?)
bytesRead DWORD ?

.code
mov  eax, fileHandle     ; open file handle
mov  edx, OFFSET buffer  ; points to buffer
mov  ecx, BUFFER_SIZE    ; max bytes to read
call ReadFromFile        ; read the file
{% endhighlight %}