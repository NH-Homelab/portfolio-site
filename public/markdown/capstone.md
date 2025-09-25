##### BI Inc Senior Capstone

---

**Purpose** -- To evaluate the viability of Non-Terrestrial Networks (NTN) for IoT applications.

**Deliverables** --
* C program written for the arduino platform to
    1. interface with NTN modems to send packets
    2. collect data from various sensors (temperature, humidity, pressure)
    3. package data to save bandwidth
* A data pipeline in AWS to collect data from Arduino devices and store in a backend database
* A frontend to display and analyze the collected data

**Process** -- We split our team into 3 groups: an arduino team, an AWS team, and a frontend team. By agreeing on data structures and communication schemes from the beginning, we were able to develop the three major deliverables concurrently. This was essential to finish the project under a time constraint from the school year (~8 months) as well as our responsibilities to other courses. 

---

**Arduino Program** -- I was on the Arduino team and was tasked with interfacing with our **Monogoto Modem** kit. When we were handed the kit, the sponsor told us they were only able to get it to send data once. It was essential that we had plenty of time to test the device over many months. 

The device had a proprietary instruction set using AT commands. Some were common to many other AT devices, but there were private instruction sets that had limited documentation.

We wanted to test multiple different schemes (MQTT, CBOR) for encoding our data before transmission. After researching, I found libraries that would handle encoding data for me. Unfortunately, these libraries used UDP / TCP connection objects that the modem didn't natively support. I decided the best way to be able to test multiple encoding schemes would be to create my own UDP / TCP connection objects that implement the necessary methods. I was able to pass these objects to the libraries that already existed. 
