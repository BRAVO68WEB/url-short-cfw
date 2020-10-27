# 👷 `url-short-cfw`

An Custom Build Link Shortener build with Cloudflare Workers

![CFW Logo](https://github.com/DFCommunity/img-stack/blob/master/cfw.png?raw=true)

## Status Badges 

![atb1](https://flat.badgen.net/badge/Build-With/CloudFlare%20Workers/orange)
![atb2](https://img.shields.io/badge/Build%20Framework-NodeJS-green??style=for-the-badge&logo=node.js)

![Deploy to CF Workers](https://github.com/BRAVO68WEB/url-short-cfw/workflows/Deploy%20to%20CF%20Workers/badge.svg)
![Node.js CI](https://github.com/BRAVO68WEB/url-short-cfw/workflows/Node.js%20CI/badge.svg)




## Project Structure

```
.
├── .github                   # Auto Deploy and NODE CI scripts (`GitHub Actions Scripts`)
│   └── workflows
│       ├── cfw.js.yml          # CloudFlare Worker auto deploy script
│       └── test.yml            # NodeJS CI scripts
├── dist                      # Build Directory
│   └── worker.js             # Initial CFW Worker file
├── index.js                  # Initial CFW Worker file
├── package.json              # NodeJS package configuration
├── urls.json                 # Custom Url Endpoints
└── wrangler.toml             # CFW wrangler config
```

## Build your Own

To generate using [wrangler](https://github.com/cloudflare/wrangler)

```
wrangler generate <your-project-name> https://github.com/BRAVO68WEB/url-short-cfw
```

