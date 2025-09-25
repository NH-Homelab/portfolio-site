##### Foster Source

---

The foster source project intended to provide a platform for local foster parents to connect with each other and support each other. The platform included an ability for the organization to moderate the forum, verify users, and for foster parents to help provide child care to eachother.

The website was written in Angular with typescript, and used a Node.js + Express backend.

###### Backend

---

I was most familiar with creating backends in Node.js and Express, so I requested to be on the backend team. Based on projects I had done in the past, I implemented user authentication using a Json Web Token (JWT). This was the first project I used an ORM for, which simplified database access on the backend.

I created a RESTful API plan for the backend that allowed the frontend team to simultaneously develop with mock API's. 

###### Reflection

---

In hindsight, I think that I could have used sessions for authentication instead of JWT's. I've read online that JWT's are not intended for maintaining sessions. Since JWT's cannot be validated on the client side (without exposing the private key), users were able to modify the token and load admin pages. Since there was no PII or other confidential information on the pages, and the user was still incapable of loading any admin data from the backend or otherwise circumventing security, we retained the JWT authentication scheme.

This was also one of my first team projects where the team members were not my close friends. I experienced real world developer collaboration and learned that I needed to be able to ask for what I needed from the team. I was struggling to keep up with the pace of development and should have requested help with the backend sooner. 

I learned that I liked being able to help people with my code. I had reached a point in my journey where I felt ready to create real applications, and the blueprint boulder organization gave me that opportunity in a safe environment. 