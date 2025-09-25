##### Quantlytic Project

---

This was the first project I started after graduating. I enjoyed having the time and freedom to explore some of my own ideas. I wanted to revisit the idea of autonomous trading bots with a fresh perspective. I chose to develop this project with a microservice architecture, event driven, and in Golang. 

I've stepped away from this project for now to focus on my homelab. I successfully learned about using buckets and kubernetes for my code deployments, and with more experience I'll revisit this project. 

###### Motivation

---

The podcast episode on Renaissance Technologies by Acquired inspired me to revisit this project idea. I've seen sources online mention that trying to predict prices really isn't possible. Stock price is a consequence of a company's performance and consumer sentiment. There's a lot of variability that isn't easy to account for. Renaissance Technologies' Medallion Fund proves that it's possible to accurately predict price movements if you have access to high quality data. I don't believe that I'll ever develop a successful autonomous trading bot, but I do think it's a worthwhile project that gives me an excuse to explore microservices, machine learning, web development, and more all in one project. 

###### Current State of Project

---

Right now, I was successfully able to read live data from an API, publish messages to a kafka topic, and have a service read that data and write it into a bucket.

###### Kafka

---

I'd heard that Kafka is like a message queue. I thought this would work well to pass live data to downstream microservices as soon as it was available. For instance, I wanted to store the raw API responses in a bucket as a source of truth / backup, a timeseries database for backtesting services to query, training services that are constantly training new models on live data, and running models that are using live data to predict future prices.

###### Kubernetes

---

This was my first attempt at using kubernetes. There was a huge learning curve since I'd never used the tool, and because I didn't want to use a cloud provider. I instead setup a VM on my proxmox server that was running a minikube cluster. This way, I could still learn kubernetes without the costs of a cloud provider. I think the downside is having to diagnose issues with setting up this software. 

I tried hosting my Minio Bucket and database using kubernetes. In hindsight, this was too much complexity for my first time with kubernetes. In my next project, I ended up putting my bucket and database in docker containers that ran alongside the minikube docker container. 

I setup a Github Self-Hosted Runner so that I could deploy code changes to the cluster automatically.

###### Acquiring Data

---

I had many potential data API's picked out. One of the most obvious choices would be to scrape data from Yahoo Finance. They do not have an official API, but many libraries exist to scrape the data already. I wasn't sure that I could trust the quality of this data. In fact, my biggest challenge with this project is finding high quality data for free. I eventually ran into the conclusion that if I didn't want to pay for high quality data, this project's complexity increased tremendously. 

When I return to this project, I think I'll switch to Crypto trading instead of stock trading. I believe I'll be able to get high quality historical data for free, and will be able to continue the project. 

###### Future Changes

---

1. I'd like to move my minio bucket and database to docker containers like I do in my homelab project. It will be simpler to use.
2. I'd like to rename my DBWriteService to something more like BucketWritebackService, since it isn't writing to a database just yet.
3. I'll find reliable API's for crypto data instead of trying to use stock data. I think my chances of creating a successful model are higher, and that I'll be able to find higher quality data for free. Plus, there are fewer trading API's accessible by reatil stock investors than there are available for trading crypto autonomously. 