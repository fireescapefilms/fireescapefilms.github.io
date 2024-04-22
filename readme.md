# Fire Escape Films

This project is maintained by students at the University of Chicago who are passionate about filmmaking. The website helps people understand what productions we currently work on and what films we have made in the past. It also serves as an assistant tool for students to confirm what equipment they need and what on-campus resources they can use. We aim to provide a comprehensive list of available equipment/resources at the Cage. You can access the website [here](https://fireescapefilms.org/).

## Get Started for Tech Directors

The project is based on [Jekyll](https://jekyllrb.com/), which is a static site generator common for Github Pages. The entry point is the `index.html` file in the root directory. To build the site locally, you can run the following command, and the website will be served on the localhost with port number 4000: `https://127.0.0.1:4000/`.

```bash
bundle install
bundle exec jekyll s
```

### The Equipment

The equipment page is rendered by the `equipment.html` file in the project root folder. All the actual information is stored in markdown files under `_devices` folder. We currently have 6 types of equipment: audio, cameras, lenses, camera-supports, lights, misc. To add a new device, you would create a markdown file in the corresponding folder and type in the following head matter. There are three types of access groups: `General`, `Advanced`, `Special`. Note that any names other than `General` and `Advanced` are considered special access. Don't use the word `Special` for special access groups, as they should have their unique, meaningful names. An example is shown below.

```yaml
---
order: 10
type: light
name: Light Panel 12'x12'
picture: /image/devices/lights/LightPanel12x12.jpg
access: General
patronURL: https://uchicago.webcheckout.net/sso/patron#!/category/20710286
description: "Light panels that require a power plug in the wall. If you want to use it outside, make sure you have either the V-Mount battery or NP-F series batteries."
---
```

We put the image under `image/devices` folder to make it more organized. The type must be one of the types in the set [camera, light, support, lens, audio, misc].

### Our Films

`Our Films` page is rendered by the `films.html`, which is currently a carousel defined in `_includes/carousel.html`. For elements that appear multiple times, we put the HTML files in `_includes` folder to reuse them. The actual films that appear in the carousel is defined in markdown files in the `_carousel` folder. The thumbnail of each film is stored in `image/carousel`, so you don't need to include the path but just put the name of that image file in the head matter. An example is shown below.

```yaml
---
title: "BIKE"
caption: "Directed by Cristina Rodriguez (2022-2023)"
image: "BIKE-carousel.jpg"
order: 0
---
```

**TODO:** we should update this page every quarter to include the new films.

Tech directors should collaborate on adding new elements to our website. Ideally after the major development is done, anyone with a little bit of Github and Markdown knowledge can maintain the website by modifying the markdown files only.