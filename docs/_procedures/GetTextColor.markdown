---
layout: default
title: GetTextColor
summary: Gets the current foreground and background colors of the console window.
receives: None
returns: AL = color ; upper 4 bits = background, lower 4 bits = foreground
categories: 
---
{% highlight nasm %}
.data
color byte ?

.code
call GetTextColor
mov  color,AL
{% endhighlight %}