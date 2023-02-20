---
layout: default
title: WriteStackFrame
summary: Writes the stack frame of a procedure.
receives: 
    - DWORD - number of parameters passed
    - DWORD - number of DWORD local variables
    - DWORD - number of saved registers
returns: None
categories: general
---
{% highlight nasm %}
myProc PROC USES ebx, ecx, edx
    val:DWORD
    LOCAL a:DWORD, b:DWORD

.code
; inside myProc ...
INVOKE WriteStackFrame, 1, 2, 3

{% endhighlight %}