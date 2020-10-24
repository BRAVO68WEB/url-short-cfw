# 👷 `url-short-cfw`

An Custom Build Link Shortener build with Cloudflare Workers

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
