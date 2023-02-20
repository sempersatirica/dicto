---
layout: default
title: ReadKey
summary: Performs a no-wait keyboard check to see if any key has been pressed.
receives: None
returns: 
    - AL = ASCII code or 0 (if special key)
    - AH = scan code (if AL = 0)
    - DX = virtual key code (if AL = 0)
    - EBX = keyboard flag bits (if AL = 0)
    - ZF = 0 (key pressed) or 1 (no key)
categories: general
---
{% highlight nasm %}
.data
pressedKey BYTE ?

.code
    call ReadKey
    cmp ZF, 0
    jne NoKey
    mov pressedKey, AL
NoKey:
{% endhighlight %}