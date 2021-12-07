---
permalink: /physics/pulleys-sol/
author_profile: false
title: "Pulleys (Solutions)"
toc: true
toc_label: "Contents"
---

<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416472460612865" crossorigin="anonymous"></script>
</head>

<div class="notice--danger">
<p style="font-size:13pt">The following solutions are for the problems on pulleys in the context of mechanical equilibrium linked <a href="/physics/pulleys/index.html#exercises">here</a>. I encourage you to attempt them by yourself first before looking through the solutions.</p>
</div>

> ## Problem 1

<div class="notice--info">
<p style="font-size:13pt">Consider the following system with negligible friction and a massless rope.</p>
<p style="text-align:center"><img src="/assets/images/pulley-3.png" alt="atwood" height="40%" width="40%"></p>
<p style="font-size:13pt">Find the acceleration and force acting on both of these objects. Be sure to include the directions of the vectors as well.</p>
</div>

These two blocks are connected by a single rope, so we know that the magnitude of their accelerations $a$ is the same. Because there is no friction and no external forces other than gravity, we know that $m$ will fall downwards and $M$ will accelerate to the right in the $+\hat{x}$ direction. Mass $m$ has two forces acting on it: tension $T\hat{y}$ and gravity $-mg\hat{y}$, so using Newton's second law on mass $m$, we have

$$ma=mg-T\longrightarrow a=g-\frac{T}{m}$$

Notice that the right hand side is $mg-T$ instead of $T-mg$ because we are assuming that the mass $m$ accelerates in the $-\hat{y}$ direction instead of the $+\hat{y}$ direction, so quantities in the $-\hat{y}$ direction should be treated as "positive." Meanwhile, mass $M$ only has one force acting on it: tension $T\hat{x}$, and so it's second-law equation is

$$Ma=T\longrightarrow a=\frac{T}{M}$$

Using the above two equations, we know have two equations for $a$, so equating them gives

$$g-\frac{T}{m}=\frac{T}{M}\longrightarrow g=T\frac{M+m}{Mm}\longrightarrow T=\frac{gMm}{M+m}$$

Plugging this expression for the magnitude of the tension force $T$ into the second equation for $a$ above, we have

$$a=\frac{T}{M}=\frac{gm}{M+m}$$

Therefore, we can conclude that the magnitude of the two relevant quantities in this problem $a$ and $T$ is

<div class="notice--success">
<p style="font-size:13pt">$$a=\frac{gm}{M+m}, \quad T=\frac{gMm}{M+m}$$</p>
</div>

> ## Problem 2

<div class="notice--info">
<p style="font-size:13pt">Consider the following system with negligible friction and a massless rope.</p>
<p style="text-align:center"><img src="/assets/images/pulley-4.png" alt="atwood" height="40%" width="40%"></p>
<p style="font-size:13pt">The mass of Pulley $A$ is $m_A$, the mass of Pulley $B$ is $m_B$, and the mass of Pulley $C$ is $m_C$. Find the condition on $m_2$ in terms of $m_1$ in order for the system to be in mechanical equilibrium.</p>
</div>

As we will see, what appears to be a complicated setup of multiple pulleys is actually not too difficult to consider _under the assumption that we want the system to be in mechanical equilibrium_.

We'll start with considering the force of tension $T$ in the $+\hat{y}$ direction acting on $m_1$. Because of the nature of pulleys, the segments of rope on both "sides" of Pulley $A$ also have tension with magnitude $T$, and so the rope connecting Pulleys $A$ and $B$ experiences a tension with magnitude $T$. By the nature of pulleys, this means that the segments of rope on both "sides" of Pulley $B$ also have a tension with magnitude $T$.

The tension $T_C$ acting on the two sides of the separate rope connected to Pulley $C$ is a bit more difficult to consider. To solve for $T_C$ as a function of $T$, we can use the equilibrium force balance condition on Pulley $B$. Accounting for all appropriate forces (two upwards tensions $T$, one downward tension $T_C$, and the force of gravity acting on $m_B$),

$$T+T-m_Bg-T_C=0\longrightarrow T_C=2T-m_Bg$$

Of course, this is assuming that $m_Bg\leq 2T$. That is, we'll assume that the mass $m_B$ of Pulley $B$ isn't too heavy such that there's no way it can be in mechanical equilibrium. Now, for the equilibrium condition on Pulley $C$, accounting for two upwards tensions $T_C$ and the forces of gravity acting on $m_2$ and $m_C$,

$$T_C+T_C-m_2g-m_Cg=2T_C-(m_C+m_2)g=0$$

Plugging in our expression for $T_C$ in terms of $T$ from above,

$$4T-2m_Bg-m_2-m_Cg=0$$

In order for mass $m_1$ to be in equilibrium, $T=m_1g$ necessarily, and so

$$4m_1g-2m_Bg-m_2-m_Cg=0\longrightarrow m_2g=4m_1g-2m_Bg-m_Cg$$

Therefore, we can conclude that

<div class="notice--success">
<p style="font-size:13pt">$$m_2=4m_1-2m_B-m_C$$</p>
</div>

Of course, this is assuming the appropriate relationship between $m_1, m_B, m_C$ such that $m_2>0$ (otherwise, our solution is not physically relevant).
