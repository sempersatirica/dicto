---
layout: default
title: ReadChar
summary: Reads a single character from the keyboard.
receives: 
    - AL = character
    - AH = scan code (optional ; if extended key pressed)
returns: None
categories: general
---
{% highlight nasm %}
.data
char BYTE ?

.code
call ReadChar
mov  char,al
{% endhighlight %}