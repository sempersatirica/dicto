---
layout: default
title: SetTextColor
summary: Sets the foreground and background colors for text output.
receives: EAX = colors
returns: None
categories: general
---
{% highlight nasm %}
; foreground color + (background color x 16)
mov eax, white + (blue * 16)   ; white on blue
call SetTextColor
{% endhighlight %}

Color values are: 
- black  0 
- blue  1 
- green  2 
- cyan  3 
- red  4 
- magenta  5 
- brown  6
- lightGray  7 
- gray  8 
- lightBlue  9 
- lightGreen  10
- lightCyan  11 
- lightRed  12
- lightMagenta  13 
- yellow  14
- white  15