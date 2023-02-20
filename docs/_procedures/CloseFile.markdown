---
layout: default
title: CloseFile
summary: Closes a disk file that was previously opened.
receives: EAX = file handle
returns: EAX = return code (0 if error)
categories: file
---
{% highlight nasm %}
mov  eax,fileHandle
call CloseFile
{% endhighlight %}