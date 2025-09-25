##### Homelab Authentication

---

This project was built to update and replace a previous system written with Node.js. The goal is to first implement the same functionality of the previous service, but leaving room to expand its functions later.

The authentication service is used by an Nginx server to check if a user is priviledged for a given configuration. The service checks for an authentication cookie, redirects to google's login, and handles the callback by generating the proper cookie.

###### Google OAuth

---

The old authentication system relied solely on google Oauth to authenticate users. I chose this approach because I didn't want to store passwords. However, lately I've wanted to move away from Google and add a new option for my users to login with a username and password (or keep using google).

###### Database Migration

---

The old database was designed with the notion that Google would be the only way users were authenticated. That meant the user profile information (like their name) was stored in the same table as their token from google oauth. I designed a new database that separated a user's profile from their authentication method. This would allow users to use google oauth, a username and password, or both if they liked. 

###### Kubernetes

---

I want changes to my homelab to deploy seamlessly. I had experimented with using github actions to deploy my project, but they didn't have any failsafe if there was a failure with deployment. This could cause my sites going down without me knowing until I tried to use them. With this project, I've chosen to move all of my homelab's services to a kubernetes node running on my server. This means that when I try to deploy changes the previous working container will still be running until a new pod succeeds deployment.

###### Current Progress

---

This authentication service officially replaced my old Node.js system. It still has bugs and only supports google oauth, but is able to handle authentication now and was designed to be extensible. 