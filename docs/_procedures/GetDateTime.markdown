---
layout: default
title: GetDateTime
summary: Gets current local date and time, stored in a 64-bit integer in Win32 FILETIME format.
receives: PTR QWORD - reference to store datetime
returns: PTR QWORD - date and time in FILETIME format
categories: general
---
{% highlight nasm %}
.data
time        QWORD ?
tenmil      DWORD 10000000
shift       REAL8 11644473600.
unixtime    DWORD ?

.code
push  offset time
call  GetDateTime

; convert Win32 FILETIME to Unix time
finit
fild  time
fidiv tenmil
fsub  shift
fist  unixtime

; display time
mov   EAX unixtime
call  WriteDec
{% endhighlight %}