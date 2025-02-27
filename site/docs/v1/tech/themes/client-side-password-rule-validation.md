---
layout: doc
title: Client-side Password Rule Validation
description: Configuring FusionAuth to check passwords client side
navcategory: customization
---

FusionAuth checks password rules in server-side validation, but you can also check them in your client. This page shows one method of doing so in JavaScript.

{% comment %}
This page is primarily pulled from a GH subdirectory, ensuring that the code can be ran and updated easily. The README is also in that repo to make sure it stays in sync with the code.

When you change the remote files, there may be a 5 minute or so lag after your push before the changes are available at the `raw` URL, so don't be surprised if your changes don't immediately appear.
{% endcomment %}

{% remote_include https://raw.githubusercontent.com/FusionAuth/fusionauth-example-scripts/master/client-side-password-rules/README.md %}

## JavaScript Code

Here's the example code.

```
{% remote_include https://raw.githubusercontent.com/FusionAuth/fusionauth-example-scripts/master/client-side-password-rules/FusionAuthPasswordChecker.js %}
```
