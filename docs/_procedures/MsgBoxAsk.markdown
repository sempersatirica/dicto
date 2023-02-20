---
layout: default
title: MsgBoxAsk
summary: Displays a graphical popup message box with Yes and No buttons.
receives: 
    - EDX = address of question string
    - EBX = address of title string ; 0 for blank
returns: EAX = answer ; IDYES (6) or IDNO (7)
categories: general graphical
---
{% highlight nasm %}
.data
caption  BYTE "Survey Completed",0
question BYTE "Thank you for completing the survey."
         BYTE 0dh,0ah
         BYTE "Would you like to receive the results?",0

.code
mov  ebx, OFFSET caption
mov  edx, OFFSET question
call MsgBoxAsk
;(check return value in EAX)
{% endhighlight %}