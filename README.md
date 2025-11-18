# Portfolio Site
A portfolio site created with Next.js and Material UI. Check out the live site [here](https://nickhenley.dev)!

## Future Changes
* Create a backend in Go to allow dynamically adding content. Currently new content has to be pushed to the github repo - in the future this will be stored in a database.
* Automatic deployments: deployment involves building the static site files and copying them to a minio bucket. I'd like to create github actions to handle this process.
* Milestone Structure Change: I want projects to be made up of a list of smaller updates which will enable me to make more frequent updates to the timeline.

## Setup

1. Clone the Repository
```
git clone https://github.com/NH-Homelab/portfolio-site
```

2. Install NPM packages
```
cd portfolio-site && npm i
```

3. Run the development server
```
npm run dev
```