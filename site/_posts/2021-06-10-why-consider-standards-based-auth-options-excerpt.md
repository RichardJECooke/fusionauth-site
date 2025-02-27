﻿---
layout: blog-post
title: Why use a standardized auth protocol?
description: What are the main reasons you should think about using a standarized authentication and authorization protocol such as OAuth?
author: James Hickey
image: blogs/why-use-standardized-auth-protocol/why-use-a-standardized-auth-protocol-header-image.png
category: article
tags: standards oauth authentication authorization
excerpt_separator: "<!--more-->"
---

Software applications regularly need to gain access to data from other services on behalf of their users. An application may need to grab a list of user's contacts from a third-party service, such as their Google contacts. Or it might need to access a user's calendar so the application can create calendar entries for the user. Larger organizations often require employees to have passwordless access to all the applications and services needed to do their jobs.

<!--more-->

_This blog post is an excerpt from [The Value of Standards-Compliant Authentication](/learn/expert-advice/oauth/value-standards-compliant-authentication)._

How can you make sure your systems are giving proper access to other systems and verify access requests from other applications? Are there easy and trusted ways to build these integrations? 

In this article, you'll learn about why it's important to use a standards-compliant authentication protocol when integrating systems. 

## Security

If you try to build an authentication protocol or procedure—no matter how simple it may seem—you are putting your system at increased risk. It's often said in the context of security, "Don't roll out your own crypto." The same can be said about an authentication protocol primarily used to integrate systems.

Standardized auth protocols are like open-source software: You can trust open-source code when other experts have examined how they work and have publicly vetted them. Likewise, standardized auth protocols have been publicly vetted by experts and are openly trusted. Because of this, many organizations will trust _your_ solutions only if you are using standardized protocols such as OAuth and SAML.

When you use a standardized protocol, you have the peace of mind that comes with knowing your authentication system is following in the footsteps of industry experts and best practices.

## Transferable learning

What would happen if every time you built a new system's authentication system, you had to create it from scratch? You would have to learn the nitty-gritty details of authentication over and over again.

This would lead to a scenario where you couldn't leverage your hardwon knowledge between projects and employers. If you instead use a ubiquitous protocol like OAuth, there may be subtle differences, but you'll understand the general authentication architecture. If you know how standardized protocols work and what use cases they solve, you can bring that knowledge to other projects and companies.

The same applies when teaching and onboarding new engineers to your team. If you are using a standardized auth protocol, then your new team members are likely to already know about OAuth, SAML, or other standardized protocols. It will be much easier to get these new team members up and running and contributing to these relevant areas of your system.

## Supporting libraries

Imagine that you have an API with a bespoke authentication implementation. Would you be able to build SDKs or code libraries to interact with your API easily? Since you are using a custom authentication design, you'd have to build the core logic of any code libraries from the ground up every time. And maintain them, forever.

On the other hand, most modern programming languages have code libraries that integrate with standard auth protocols thereby accelerating your development work. By using a standardized auth protocol such as OAuth or SAML, your clients and API consumers can reuse common code libraries for their programming language of choice.

## Interoperability with other systems

Using an auth protocol such as OAuth makes your system more interoperable with others. If you are working with a larger enterprise organization, then you need to integrate with other systems all the time. Using a standardized way to do this saves time, mental overhead, and overall cost.

The same applies to external systems. If you have created an API that supports SAML, for example, then your customers will understand how to integrate their solutions and systems with yours much more quickly, and with far fewer headaches.

## Edge cases

Standards have been used by many different organizations and systems in many different ways. Often edge cases are either handled or explicitly ruled out. 

By leveraging a standard, you will gain the benefits of all that knowledge and experience.

To learn about details of particular authentication and authorization standards, read [The Value of Standards-Compliant Authentication](/learn/expert-advice/oauth/value-standards-compliant-authentication).
