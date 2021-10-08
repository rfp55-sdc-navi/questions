# System Design Capstone
Question and Answers API

![node.js](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=nodedotjs&logoColor=green)
![Express](https://img.shields.io/badge/-Express-20232A?style=for-the-badge&logo=express&logoColor=yellow)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-20232A?style=for-the-badge&logo=postgresql&logoColor=blue)
![NGINX](https://img.shields.io/badge/Nginx-20232A?style=for-the-badge&logo=nginx&logoColor=green)
![Jest](https://img.shields.io/badge/-Jest-20232A?style=for-the-badge&logo=jest&logoColor=red)


<!-- ABOUT THE PROJECT -->
## About The Project

The objective of the System Design Capstone was to build out the API to support an existing Front End Capstone e-commerce application. The goal is to replace the existing API with a back end system that can support the full data set for the project and can scale to meet the demands of production traffic.

I was in charge of one of the services, Questions and Answers that make up the full API. This project requires us to first design a database and server that meet the requirements of your application, and then deploy and scale this service to support (a minimum of) 100 requests per second on EC2 using a t2.micro instance.

Objectives
* Design and multiple database options to analyze and compare, selecting one database option
* Transform the existing application data and load it into the database
* Design and build an API server to provide data to the client in the format specified by the API documentation
* Optimize your individual service by analyzing query times and server responses
* Deploy your service and integrate it successfully with the FEC web application
* Measure and improve the performance of your service at scale
* Work as a team and scale your application's architecture to support loads up to tens of thousands of requests per second.

### Built With
* [Node](https://nodejs.org/en/) - Node.js provides an asynchronous event-driven runtime environment for building scalable network applications
* [Express](https://expressjs.com/) - Express was chosen for it's minimal interface and flexible HTTP routing methods
* [PostgreSQL](https://www.postgresql.org/) - PostgreSQL is used here as a robust and stable open source database
* [NGINX](https://www.nginx.com/) - NGINX enables load balancing HTTP traffic between between many routers


## Questions & Answers
### Test results with Loader.io
Get Questions
10,000 requests per second using AWS t2 micro instance

Get Answers
10,000 requests per second using AWS t2 micro instance



## System Architecture
![System Architecture][system_arch]


<!-- CONTACT -->
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
[system_arch]: images/system_arch.png