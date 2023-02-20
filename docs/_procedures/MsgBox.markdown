---
layout: default
title: MsgBox
summary: Displays a graphical popup message box with an optional caption.
receives: 
    - EDX = address of message string
    - EBX = address of title string ; 0 for blank
returns: None
categories: general graphical
---
{% highlight nasm %}
.data
caption  BYTE "Dialog Title", 0
HelloMsg BYTE "This is a pop-up message box.", 0dh,0ah 
         BYTE "Click OK to continue...", 0

.code
mov  ebx, OFFSET caption
mov  edx, OFFSET HelloMsg
call MsgBox
{% endhighlight %}