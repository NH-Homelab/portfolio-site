#### CryptoTool Trading Bot

---

The CryptoTool project was my first attempt at creating an autonomous trading bot for crypto currencies. This is an idea that has fascinated me for years. While the project never was able to predict stock or crypto prices, it was a stepping stone in my developer experience that taught me the benefits and downsides of different approaches.

**Design Choices**

---

Around this time, I had learned more about multithreading and processes in C/C++. Because of that, I was able to separate the different functions of my project and run them concurrently, with the main process handling errors in child processes. 

This was an early attempt at using a microservice architecture. Attempting to homebrew this architecture proved challenging, and taught me the importance of learning tools like kubernetes to handle this boilerplate. While my approach was an acceptable solution, it increased development challenge and time on a problem that other developers had already solved. 

Another design choice was using C/C++. I decided that since I was eventually going to work with live data that the speed benefits of C/C++ would be important. However, the verbosity and memory management of these languages added to development time with little benefit in the long run. While it would have been faster than implementing the code in python, I could have chosen an easier language to develop in. Had I chosen python, I could have found libraries that implement the underlying computations in C/C++ anyways and receive the speed benefits with ease of development. 

Working on this project in C/C++ spawned an interest in the Rust language, which has memory management and "fearless concurrency" features. 