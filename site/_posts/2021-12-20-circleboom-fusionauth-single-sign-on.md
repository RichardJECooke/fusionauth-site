---
layout: blog-post
title: Circleboom chose FusionAuth for single sign-on across their products
description: Circleboom helps people strengthen their social media circles by creating easy-to-use, intuitive design applications. They chose FusionAuth over several evaluated alternatives to offer a unified login experience to their customers.
author: Dan Moore
image: blogs/circleboom-fusionauth-single-sign-on/circleboom-chose-fusionauth-for-single-sign-on-across-their-products-header-image.png
category: community-story
tags: topic-community-story community-story twitter
excerpt_separator: "<!--more-->"
---

Atakan Eser is a FusionAuth community member and co-founder and CTO at Circleboom. He chatted with us over email about how he and his team are using FusionAuth to meet their auth needs. 

<!--more-->

*This interview has been lightly edited for clarity and length.*

-------

**Dan:** Can you tell me a bit about Circleboom? What is the company's mission?

**Atakan:** Circleboom is a technology company that helps people strengthen their social media circles by creating easy-to-use, intuitive design applications. We're fond of Pareto's Principle (80/20), and we're always proud to say that we only make features to be used. We do not add any sophisticated features that most of our users are not using but paying for.

We have two products on the market: 

* Circleboom Twitter Management Tool enables users, brands, and SMBs to grow and strengthen their Twitter Accounts. 

* Circleboom Publish Tool helps you design, plan, automate and post social media posts to major networks like Linkedin, Twitter, Facebook, Instagram, and Google My Business.

**Dan:** Tell me about your work as a CTO at Circleboom.

**Atakan:** At Circleboom, we're a small team of about ten people of all sorts. With such a small team, I oversee all the company's technical aspects and put my hands on-keyboard to create products with my teammates.

> After discovering FusionAuth, it took literally a few hours to create our first demo.

**Dan:** How do you use FusionAuth? OAuth? User management? Social sign-on? Something else?

**Atakan:** In 2021, we released our second product, Circleboom Publish. Before that, our only need for authentication was Twitter's "Login with Twitter (OAuth)" to land Twitter users on our dashboard; it's the only network that product supports. 

With the inception of Circleboom Publish, which supports four other social media networks, we realized that we need a standalone SSO system to help our users login and use different tools we create without a hitch. So, our search for a robust single sign-on solution began.

We put FusionAuth at the core of our auth systems and use it for OAuth, user, and role management. All of our products, including our iOS app, the web apps mentioned above, and management tools use FusionAuth. We created our own forms (views) and consumed the FusionAuth API via REST calls for the iOS mobile application. Even our GraphQL and REST systems use the tokens and claims provided by FusionAuth to authenticate our customers against our backend.

Apart from the products we developed, we use FusionAuth to manage users and roles in our own customer support system. We're also considering integrating the Strapi marketing web CMS with FusionAuth.

**Dan:** What problems did we solve for you?

**Atakan:** Finding an easy-to-use yet powerful auth system is challenging. But you provide this effortlessly and inexpensively.

> From my previous experience, I can easily say [FusionAuth] saved more than a couple of man/months and tens of thousands of dollars.

**Dan:** How were you solving them before FusionAuth?

**Atakan:** We were using Login with Twitter as we only had features for Twitter users. 

Due to the design choices, we didn't need any other user or role management features in our first app, Circleboom Twitter management tool.

**Dan:** Why did you choose FusionAuth over the alternatives?

**Atakan:** I spent more than a month searching and finding a tool to fit our needs. 

It was painful to work with IdentityServer4, which we evaluated initially. Auth0 or Firebase were not enough for our needs. 

I didn't even give Azure AD a try, even though I spent half of my career using Microsoft tools, including Active Directory, Windows, etc.

**Dan:** How much time and money would you say FusionAuth has saved you?

**Atakan:** After discovering FusionAuth, it took literally a few hours to create our first demo. After that promising demo, we dove deep into the FusionAuth white papers and API docs to bring Circleboom Login live. 

From my previous experience, I can easily say it saved more than a couple of man/months and tens of thousands of dollars.

> Finding an easy-to-use yet powerful auth system is challenging. But you provide this effortlessly and inexpensively.

**Dan:** How do you run FusionAuth (kubernetes, standalone tomcat server, behind a proxy, etc)?

**Atakan:** We followed FusionAuth's guidelines on creating Docker systems and improved it by adding Caddy as a reverse proxy. We created an environment (.env) file to be used in the "docker-compose" file and put our private variables in it. 

Other than our private information, it's all [publicly available](https://github.com/circleboom/docker-circleboom-fusionauth). Check it out!

**Dan:** Any general feedback/areas to improve?

**Atakan:** Some of the features are well hidden, and it's not easy to understand how to find them: in particular, adding roles to an application. Every time we want to do this, we search around and think "where's that roles menu item? It was here last time". Then we realize after a few minutes that we need to exit "app edit mode" and click on the user-shaped icon to get into the roles. You manage every important thing about an app on the "app edit" screen, except role management.

On the admin dashboard, I still have to search for action buttons (you usually put them in the upper right corner). It's somewhat contrary to standard UX.

Even though I love the product, I think it needs a user experience overhaul.

**Dan:** Thanks for the feedback!

-------

We love sharing community stories. You can check out [Circleboom's website](https://circleboom.com/) if you'd like to learn more about them.
