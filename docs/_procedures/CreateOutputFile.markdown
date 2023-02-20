---
layout: default
title: CreateOutputFile
summary: Creates a new disk file for writing in output mode.
receives: EDX = address of filename
returns: EAX = file handle (INVALID_HANDLE_VALUE if error)
categories: file
---
{% highlight nasm %}
.data
filename BYTE "newfile.txt",0

.code
mov  edx,OFFSET filename
call CreateOutputFile
cmp  eax, INVALID_HANDLE_VALUE
je   Error
{% endhighlight %}