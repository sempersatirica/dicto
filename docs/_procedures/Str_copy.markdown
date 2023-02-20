---
layout: default
title: Str_copy
summary: Copy a string.
receives: 
    - PTR BYTE - source string
    - PTR BYTE - target string
returns: PTR BYTE - target string copied from source
categories: general
---
{% highlight nasm %}
.data
oldString   BYTE "abcde",0
newString   BYTE LENGTHOF oldString dup(0)

.code
push offset newString
push offset oldString
call Str_copy           ; newString = oldString
{% endhighlight %}