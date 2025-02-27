---
layout: blog-post
title: Cybanetix deployed on-prem FusionAuth as part of a PCI-DSS compliant solution
description: FusionAuth offered Cybanetix the ability to unify the authentication and authorisation mechanisms across all customers' solutions and avoid locally managed credentials.
author: Dan Moore
image: blogs/cybanetix-fusionauth/cybanetix-deployed-on-prem-fusionauth-for-a-pci-dss-compliant-solution.png
category: community-story
tags: topic-community-story topic-upgrade-homegrown upgrade homegrown community-story
excerpt_separator: "<!--more-->"
---

Brad Kite is a FusionAuth community member and CTO at Cybanetix. He chatted with us over email about how he and his team are using FusionAuth to meet their auth needs. 

<!--more-->

*This interview has been lightly edited for clarity and length.*

-------

**Dan:** Tell me a bit about your work as a CTO and what Cybanetix does.

**Brad:** At Cybanetix, we provide outsourced security operations centre (SOC) services and bespoke security solutions to our customers, built on our own private cloud platform.

As CTO, I am responsible for the high-level design and implementation of all infrastructure and application platforms, and having a flexible customer identity platform is key to our services.

**Dan:** Can you talk a bit more about the bespoke security solutions? What have you found has really resonated with your customers? Is it the latest tech? The ability to outsource a core business risk? The joy of having a partner with specialized expertise? Something else?

**Brad:** Customers love the great level of service and attention to detail that comes with having a passionate and dedicated security team.

> FusionAuth was the only product that provided the right mix of features to enable us to achieve our goals.

**Dan:** How do you use FusionAuth? OAuth? User management? Social sign-on? Something else?

**Brad:** We use FusionAuth to integrate our service offerings into a single identity platform, using a range of SAML and OAuth technologies, and where required, further federate with existing Office 365 or other identity providers which our customers might be using. This provides end-to-end single-sign-on between our services and a customer.

**Dan:** Any unexpected benefits from having one view of the customer with your single identity platform?

**Brad:** FusionAuth saves time and adds security to our SOC team members since they often have to access multiple customers' security platforms.

Without FusionAuth, we would have to manage separate staff accounts within each security platform and staff would often get passwords muddled up. It makes both customer and staff account management far more streamlined (e.g. when employees leave).

**Dan:** What service offerings have you integrated that you feel comfortable sharing?

**Brad:** We've integrated a mix between our in-house solutions and [Exabeam](https://www.exabeam.com/).

**Dan:** What problems did we solve for you? And how were you solving them before FusionAuth?

**Brad:** FusionAuth provided us with a solution to unify the authentication and authorisation mechanisms across all our customers' solutions.

Previously, each of our customer solutions would have locally managed user credentials. If a member of staff no longer worked for a customer, there would be no way to automatically disable access.

With FusionAuth able to federate against a customer's own identity platform (such as Office 365), joiners and leavers automatically get access to the relevant platforms, reducing our support costs and improving security.

> ... [using FusionAuth] meant that we could save on development costs, and bring an overall improvement to the customer experience in a much shorter time frame [than developing the functionality ourselves].

**Dan:** Were there any technical hurdles or difficulties in the unification process?

**Brad:** We are still trying to grapple with group-based application registration. If a user is a member of a specific group then they automatically get access to that group's set of applications. This is a manual process for now.

**Dan:** Was office 365 the primary customer identity platform, or do you see others when integrating as well?

**Brad:** We federate with Okta, Office 365/Azure AD, and LDAP/Active Directory.

**Dan:** Why did you choose FusionAuth over the competition?

**Brad:** Some of our solutions require SAML, while others require OAuth.

FusionAuth was the only product that provided the right mix of features to enable us to achieve our goals.

**Dan:** How much time and money would you say FusionAuth has saved you?

**Brad:** While developing our own Authentication and Authorisation platform was certainly an option that we considered, the fact that we could deploy and start using FusionAuth rapidly meant that we could save on development costs, and bring an overall improvement to the customer experience in a much shorter time frame.

> ... it has just worked. Apart from the occasional upgrade [FusionAuth] requires little food and water.

**Dan:** How do you run FusionAuth (k8s, standalone tomcat server, behind a proxy, etc)?
 
**Brad:** We run FusionAuth behind a reverse proxy, providing multi-layered security. As our solutions are PCI-DSS compliant, being able to deploy on-prem and manage access within our own datacenter was an important factor, as the cloud-based security providers we evaluated were not able to demonstrate PCI-DSS compliance, so our solutions could not use them.

**Dan:** It sounds like being able to run FusionAuth in your own datacenter was a key part of your selection. Have you run into any issues with running and managing FusionAuth, or has it been boring tech (in a good way)?

**Brad:** No issues, it has just worked. Apart from the occasional upgrade it requires little food and water.

**Dan:** Any general feedback/areas to improve?

**Brad:** Group or Role based application assignments would be hugely beneficial, as currently this is still a user-by-user permission setting that has to be configured by our staff, rather than by group membership of a user. _[Ed: this feature request is [being tracked here](https://github.com/FusionAuth/fusionauth-issues/issues/1533).]_

-------

We love sharing community stories. You can check out [Cybanetix's website](https://cybanetix.com/) if you'd like to learn more. 
