---
layout: blog-post
title: Maila Networks centralized authentication with FusionAuth on OpenStack
description: Maila Networks uses FusionAuth and OpenStack to save months of development time.
author: Dan Moore
image: blogs/maila-networks-openstack-fusionauth/maila-networks-centralized-authentication-with-fusionauth-on-openstack-header-image.png
category: community-story
tags: topic-community-story topic-openstack openstack community-story
excerpt_separator: "<!--more-->"
---

Jean Rousseau Franco is a FusionAuth community member and CTO at Maila Networks and Mai Telecom. He chatted with us over email about how he and his team are using FusionAuth to meet their auth needs. 

<!--more-->

*This interview has been lightly edited for clarity and length.*

-------

**Dan:** Can you tell me a bit about Maila Networks? What is the company's mission?

**Jean Rousseau:** We're a Service Provider, offering Data Center Services and Telecommunications offerings in the south of Brazil.

Our mission is to provide the best experience to our customers mixing the service and connectivity offerings, both being delivered with security in mind.

> [FusionAuth solved] the authentication, logging and searching problems that we had.

**Dan:** Tell me about your work as CTO at Maila Networks.

**Jean Rousseau:** It's a big responsibility but it comes with a lot of joy. I'm involved in many different areas, from technical to design. I'm even in the field with the technicians to grasp their problems and understand their needs.

**Dan:** How do you use FusionAuth? OAuth? User management? Social sign-on? Something else?
        
**Jean Rousseau:** We started using it for a simple project and replaced the Coovachilli hotspot. Nowadays I'm experimenting with it in other areas to integrate all logins with a single application.

**Dan:** What applications are you planning to integrate with FusionAuth?

**Jean Rousseau:** Different wifi hotspot applications and email servers.

**Dan:** What problems did we solve for you?

**Jean Rousseau:** The authentication, logging and searching problems that we had.

> We're running [FusionAuth] on an OpenStack cluster...

**Dan:** What kind of searching do you find FusionAuth to be helpful for? Can you give an example?

**Jean Rousseau:** When we had different servers, we had to go through logs on different servers. That was time consuming.

**Dan:** How were you solving these problems before FusionAuth?

**Jean Rousseau:** We needed several servers and applications running to get all the data. 

With FusionAuth everything is concentrated in a single app. We can scale by adding other nodes to share the load.

**Dan:** Why did you choose FusionAuth over the alternatives?

**Jean Rousseau:** The price was the main factor. As the company itself puts it: it's transparent.

> [FusionAuth] saved us from having to build our own application.

**Dan:** How much time and money would you say FusionAuth has saved you?

**Jean Rousseau:** I haven't been able to measure it (yet), but it saved us from having to build our own application.

**Dan:** How long would you estimate it would have taken you to build your own application? 

**Jean Rosseau:** I'm just guessing, but the last time we had to build one it took us around 6 months.

**Dan:** How do you run FusionAuth (Kubernetes, standalone tomcat server, behind a proxy, etc)?
        
**Jean Rousseau:** We're running on an OpenStack cluster and we have a Nginx Server in front of it.

**Dan:** Any general feedback/areas to improve?

**Jean Rousseau:** I would recommend a few additions to the installation tutorial. They're simple to get, but we never install some of the required packages unless we really need them: tar, zip, unzip and curl.

**Dan:** Thanks!

-------

We love sharing community stories. You can check out [Maila Networks' website](https://maila.com.br/) if you'd like to learn more about them.
