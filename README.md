# System Design Capstone
Question and Answers API

<!-- ![node.js](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=nodedotjs&logoColor=green)
![Express](https://img.shields.io/badge/-Express-20232A?style=for-the-badge&logo=express&logoColor=yellow)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-20232A?style=for-the-badge&logo=postgresql&logoColor=blue)
![NGINX](https://img.shields.io/badge/Nginx-20232A?style=for-the-badge&logo=nginx&logoColor=green)
![Jest](https://img.shields.io/badge/-Jest-20232A?style=for-the-badge&logo=jest&logoColor=red) -->

![node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![NGINX](https://img.shields.io/badge/Nginx-0095D5?style=for-the-badge&logo=nginx&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)


<!-- ABOUT THE PROJECT -->
## About The Project

The objective of the System Design Capstone was to build out the API to support an existing Front End Capstone e-commerce application. The goal is to replace the existing API with a back end system that can support the full data set for the project and can scale to meet the demands of production traffic, transforming from a monolithic architecture to a scalable microservice architecture.

I was in charge of one of the services, Questions and Answers, that make up the full API. The database was designed using PostgreSQL and server was designed using Express. The application was then deployed using Amazon Web Services and scaled to support (a minimum of) 100 requests per second, error rate of less than 1%, and latency of less than 2000 ms, on EC2 using a t2.micro instance.

Objectives
* Design and multiple database options (PostgreSQL and MongoDB) to analyze and compare, selecting one database option
* Transform the existing application data and load it into the database by performing an ETL Process
* Design and build an API server to provide data to the client in the format specified by the API documentation
* Optimize your individual service by analyzing query times and server responses by stress testing with k6
* Deploy your service and integrate it successfully with the e-commerce web application
* Measure and improve the performance of your service at scale by stress testing with loader.io
* Work as a team and scale your application's architecture to support loads up to tens of thousands of requests per second.
### Built With
* [Node](https://nodejs.org/en/) - Node.js provides an asynchronous event-driven runtime environment for building scalable network applications
* [Express](https://expressjs.com/) - Express was chosen for it's minimal interface and flexible HTTP routing methods
* [PostgreSQL](https://www.postgresql.org/) - PostgreSQL is used here as a robust and stable open source database
* [NGINX](https://www.nginx.com/) - NGINX enables load balancing HTTP traffic between between many routers
* [loader.io](https://loader.io/) - Loader.io is used to stress test the performance of our system

## Questions & Answers
### Test results with Loader.io
GET Questions
* 10,000 clients over 20 seconds using 4 AWS t2 micro instances (PostgreSQL database, NGINX, Express Server 1, Express Server 2, Express Server 3)

* Response Time (Latency): 11 ms

* Throughput: 9,996.35 RPS (Requests process per second)
11,995,620 RPM (Requests process per minute)

* Error Rate: 0.0% under load

![GQ][GQ]

GET Answers
* 10,000 clients over 20 seconds using 4 AWS t2 micro instances (PostgreSQL database, NGINX, Express Server 1, Express Server 2, Express Server 3)

* Response Time (Latency): 11 ms

* Throughput: 9,996.5 RPS (Requests process per second)
11,995,800 RPM (Requests process per minute)

* Error Rate: 0.0% under load

![GA][GA]
## System Architecture
![System Architecture][system_arch]
## Contact
* John Fa - [https://www.linkedin.com/in/johnfa/](https://www.linkedin.com/in/johnfa/)

Project Link: [https://github.com/rfp55-sdc-navi/questions/tree/main](https://github.com/rfp55-sdc-navi/questions/tree/main)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[system_arch]: images/system_arch2.png
[GA]: images/GA.png
[GQ]: images/GQ.png