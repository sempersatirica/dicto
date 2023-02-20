---
layout: default
title: WriteFloat
summary: Write the floating-point value from ST(0) to the output.
receives: ST(0)
returns: None
categories: fpu
---
{% highlight nasm %}
.data
val REAL8 25.0

.code
finit               ; initialize FPU
fld val             ; push val to ST(0)
call WriteFloat
{% endhighlight %}