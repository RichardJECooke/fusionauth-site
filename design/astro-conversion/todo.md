# ToDo list for the Astro conversion

* [x] Figure out how to have index pages end with a slash (i.e. /articles/login-authentication-workflows/ -> /articles/login-authentication-workflows/index.md)
* [x] Figure out how to manage diagrams in articles in dark mode. Most are SVGs but we will need to figure out how to convert them or modify them or convert them to mermaid. See [client-credentials-grant-svg.astro](/astro/public/img/articles/modern-guide-oauth/client-credentials-grant-svg.astro)
* [x] Write redirects in the Cloudfront Lambda
* [x] Figure out how to deploy to the same S3 bucket or a new one via GH Actions
* [x] Do a final pass of the `Authentication` documents to make sure they got moved over properly. I think they are missing header images and those need to be `moved` to the new images directory
* [x] Do a final pass of the `Login & Authentication Workflow` documents to make sure they got moved over properly. I think they are missing header images and those need to be `moved` to the new images directory
* [x] Do a final pass of the `CIAM` documents to make sure they got moved over properly. I think they are missing header images and those need to be `moved` to the new images directory
* [x] Migrate over the rest of the articles from `/learn/expert-advice`
* [x] Migrate over the `Dev Tools` (will likely require some new HTML and such)
* [x] Decide if we move `Dev Tools ` to the top level or keep them under articles (probably should move them but the top nav might get cluttered)
* [ ] Rebuild the Docs landing page in Astro (`/docs/`). I did a decent amount of this work already, but the page still exists in Jekyll and my page isn’t hooked up to anything
* [x] Click test everything
* [ ] Look into automatically adding the article title to the OG image (if it is an SVG this might be simpler but maybe we can do it with PNGs also) 


## After launch

* [ ] Figure out how to protect S3 buckets from public access but serve through Cloudfront using OAC
