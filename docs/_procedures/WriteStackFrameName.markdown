---
layout: default
title: WriteStackFrameName
summary: Writes the stack frame of a procedure with the procedure name.
receives: 
    - DWORD - number of parameters passed
    - DWORD - number of DWORD local variables
    - DWORD - number of saved registers
    - PTR BYTE - reference to procedure name
returns: None
categories: general
---
{% highlight nasm %}
myProc PROC USES ebx, ecx, edx
    val:DWORD
    LOCAL a:DWORD, b:DWORD

.data
procName BYTE "myProc", 0

.code
; inside myProc ...
INVOKE WriteStackFrameName, 1, 2, 3, ADDR procName

{% endhighlight %}