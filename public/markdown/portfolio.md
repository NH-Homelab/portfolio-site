##### Portfolio Site

---

I've attempted many times to make a portfolio site that is attractive and showcases the achievements I'm most proud of. I think those two goals pose a serious challenge, but I'm finally satisfied with the results of this page. 

###### Stack Choices

---

I wanted faster development with this project than my attempts in the past. That lead me to exploring component libraries. I'd heard the most about Material UI, and came to love its simplicity and power. This is the first time I've used Material UI, and I loved being able to instantly use components that I would normally spend time developing myself. 

I used Next.js because I've used React before in the past and enjoy the way components encapsulate pieces of the website and their functionality. I also wanted to limit what new tools I was learning for the sake of development speed.

Instead of hosting a vercel server, I use NPM to build the files and serve them from a self hosted bucket with Minio. Minio is S3 compatible, and I was able to create a simple Nginx configuration to pull requested files from the bucket. 

###### Content Structure

---

I decided that I wanted the timeline of projects to be the main focus, but I obviously needed to include information about myself as a developer and a person. In the past, I've tried multi page portfolios. This time, I wanted to make a single page app that had everything it needed in one place. 

I chose to make the profile section a sidebar so that the user would initially see my profile, but be able to stow it when they wanted to focus on my projects. Since the projects have additional markdown descriptions, stowing the sidebar gives the user more screen space for the text and images describing my projects.

###### Mobile Formatting

___

A big struggle with this project was mobile formatting. Initially, I didn't write anything for mobile since I was just learning material UI. I regret not developing "mobile first" since I had to later make changes to keep the functionality I wanted on desktop while making the site legible on mobile. 

After getting a grasp on material UI, I went back and used a grid layout component to help change the layout of the site on mobile. I also added different styles for smaller screen sizes so that my site is compatible with many different viewing modalities. 

###### Next Steps

___


1. Currently, project descriptions are stored in .md files in the public directory of the site. I developed an interface for an API that would load this content from a backend service. In the future, I'll write a backend that will facilitate storing, retrieving, uploading, and editing these project descriptions. Then, I'll be able to update information on my projects dynamically instead of having to push changes to my branch.
2. I'd like to add filtering for the tags I've included in different milestones
3. A stretch goal would be including an LLM to market myself to users of the site. They would be able to ask the LLM questions about my experience and projects, and point users to the projects that they would be most interested in. I'd accomplish this by running an Ollama backend on my server and using RAG on my project descriptions, images, and github repo's. 