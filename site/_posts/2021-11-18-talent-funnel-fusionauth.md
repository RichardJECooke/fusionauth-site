---
layout: blog-post
title: Talent Funnel chose FusionAuth because it was API first and developer friendly
description: Talent Funnel runs the premier UK student job site and uses FusionAuth for their auth needs, including MFA, social sign-on and registration.
author: Dan Moore
image: blogs/talent-funnel-api-first/talent-funnel-chose-fusionauth-because-it-was-api-first-and-developer-friendly-header-image.png
category: community-story
tags: topic-community-story topic-upgrade-homegrown community-story upgrade homegrown
excerpt_separator: "<!--more-->"
---

David Billings is a FusionAuth community member and CTO at Talent Funnel. He chatted with us over email about how he and his team are using FusionAuth to meet their auth needs. 

<!--more-->

*This interview has been lightly edited for clarity and length.*

-------

**Dan:** Tell me a bit about your work as a CTO and what Talent Funnel is working on.

**David:** I have been the CTO at Talent Funnel for a couple of years. We provide a high quality ATS (Applicant Tracking System) and career sites to companies looking to revolutionise their recruitment process and reduce the time and effort it takes to attract high quality candidates to their open vacancies. We also have a very successful [student job site](https://www.e4s.co.uk) which attracts millions of users each year looking to find jobs while they are at school, college and university. The site also provides advice and help to students on the bewildering job market.

We are currently rebuilding our entire platform from scratch and centralising all of our services onto one platform to provide a seamless, tailored experience for both candidates and recruiters. The platform will drive our ATS, client career sites and our own job search engine and allow us to better use our data to help people find the most suitable jobs, faster. We are also using the rebuild to add modern features such as video responses from candidates, video interview functionality from within the ATS and candidate recommendations for employers, so they can be proactive in recruitment rather than having to wait for candidates to apply to them.

> There is a real 'developer' feel to the team and they are not locked away behind a wall of support staff and account managers which is so refreshing!

**Dan:** I'm always interested to hear about people rebuilding platforms from scratch. Can you share a bit more about what went into that decision? Was it because of velocity, architectural constraints, technology choices, team dynamics, or something else?

**David:** We decided to rebuild the platform from scratch as our old ATS was quickly facing scalability issues and was using a deprecated technology stack. It was deemed that trying to slowly move over functionality to a new platform had a large potential to introduce bugs, other issues and would have led to carrying over baggage from the old system. By cutting the cord and having a fresh start we were able to choose the absolute best technologies with no compromises and thus increase performance and development speed.

**Dan:** How do you use FusionAuth? OAuth? User management? Social sign-on? Something else?

**David:** We're using FusionAuth to power authentication for our entire platform. We have both power users for our ATS platform as well as a very large volume of 'low activity' users who may log in a couple of times a year. 

We use FusionAuth to provide standard user accounts, two factor Authentication with Google Authenticator and social sign ons which is a very important feature to reduce friction for registrations on our system. Our legacy system used it's own custom built authentication system which we wanted to move away from, we're not in the authentication business so why waste time implementing your own security, leave it to the experts! We tried many competitors but either the technology didn't fit our use-case or the billing would have been astronomical for the types of users we have.

> A lot of authentication providers seem to overcomplicate the process, something I found was not the case with FusionAuth.

**Dan:** Radically varying activity makes total sense. Did any of the seasonal variation surprise you? Do you scale your servers accordingly too?

**David:** We've been able to grow on a smooth trajectory. The old system just ran on an AWS instance and has been  upgraded a few times over the years but obviously you're limited to the amount of scalability you can achieve in this way. The new platform utilises kubernetes and we're able to auto-scale pods when we detect a surge of traffic, if we have too many pods to schedule more hardware is automatically added. No more 2am phone calls to increase resources, it's handled automatically. 

**Dan:** Which social signon have you found to be the most important or used?

**David:** A lot of our candidates like to use FaceBook to login. Obviously FaceBook isn't as popular with the younger generation so we're monitoring feedback and market forces to see what other social channels will become important soon.  

> After a lot of comparisons I happened upon FusionAuth and I was impressed right away. 

**Dan:** Why did you choose FusionAuth over the competition?

**David:** I chose FusionAuth after trying many different providers. 

I tried out Keycloak, which I found very clunky to use and prone to bugs. I had used Keycloak a few years prior and it was a pain but I hoped it had improved but still ran into similar sorts of issues that I had before. 

I tried out Auth0 which I really liked in terms of functionality, documentation and ease of use but the pricing for our use case was astronomical. 

After a lot of comparisons I happened upon FusionAuth and I was impressed right away. The documentation is clear, it is API first which is exactly what I was looking for and the team could not be more helpful! It does everything we want and it's simple to use, configure and run. A lot of authentication providers seem to overcomplicate the process, something I found was not the case with FusionAuth.

**Dan:** How much time and money would you say FusionAuth has saved you?

**David:** We currently use the community version of FusionAuth so in terms of money it's saved thousands of dollars. However, we will be upgrading soon once our platform has fully launched to help support the FA team to be doing what they are doing. In terms of time, probably 100's of hours of frustration fighting with other open source projects. Thanks to FusionAuth I may save what little hair I have left :)

**Dan:** How do you run FusionAuth (k8s, standalone tomcat server, behind a proxy, etc)?

**David:** We run FusionAuth on a cloud VM behind a HAProxy Load Balancer. I would love to see a guide on running FusionAuth behind Google Clouds firewall, which due to Google documentation is a bit of a pain to configure. 

> We currently use the community version of FusionAuth so in terms of money it's saved thousands of dollars. 

**Dan:** Any general feedback/areas to improve?

**David:** The documentation, support and API first approach FusionAuth has is second to none. I've had several interactions with 'The Dans' on Slack and have observed them helping the community on a regular basis. 

There is a real 'developer' feel to the team and they are not locked away behind a wall of support staff and account managers which is so refreshing! Improvement wise I can't actually think of much, because every time I do think or something I raise a ticket and it's addressed. 

-------

We love sharing community stories. You can check out [Talent Funnel's website](https://www.talent-funnel.com/) if you'd like to learn more. 
