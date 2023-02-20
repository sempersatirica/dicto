---
layout: default
title: OpenInputFile
summary: Opens an existing file for input.
receives: EDX = address of filename
returns: EAX = file handle ; INVALID_HANDLE_VALUE if file open failed
categories: file
---
{% highlight nasm %}
.data
filename BYTE "myfile.txt",0

.code
mov  edx,OFFSET filename
call OpenInputFile
{% endhighlight %}