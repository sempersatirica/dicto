---
layout: default
title: ReadFloat
summary: Read a floating-point value from the keyboard and push it onto the FPU stack.
receives: None
returns: ST(0) = user entered floating-point value
categories: fpu
---
{% highlight nasm %}
finit               ; initialize FPU
call ReadFloat      ; get first float
call ReadFloat      ; get second float
fmul ST(0),ST(1)    ; multiply
call WriteFloat     ; first x second
{% endhighlight %}