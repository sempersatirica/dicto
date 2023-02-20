---
layout: default
title: ShowFPUStack
summary: Display the contents of the FPU stack.
receives: None
returns: None
categories: fpu
---
{% highlight nasm %}
.data
first   REAL8 123.456
second  REAL8 10.0

.code
finit            ; initialize FPU
fld   first
fld   second
call  ShowFPUStack
{% endhighlight %}