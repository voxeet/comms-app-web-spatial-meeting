# :warning: This repository is no longer maintained :warning:

![](https://dolby.io/wp-content/uploads/2022/02/tempsnip-2048x1149.png)

# Dolby.io Web SDK Fixed Spatial Audio Sample Application

## Overview
This is a sample application for the Dolby.io Web SDK is a spatial audio enabled version of the [getting started](https://docs.dolby.io/communications-apis/docs/create-a-basic-audio-conference-application) project included in conjunction with this [blog](https://docs.dolby.io).

## Requirements 
- A Dolby.io Account
- A Microphone connected to your test machine.

## Getting Started 

1. If you haven't done so already, create a free account on [Dolby.io](https://dolby.io/signup). 
2. Clone the project.
3. Go to your dashboard, create a token and get your `Consumer Key` and `Consumer Secret`.

In the file `src/scripts/client.js`, locate the following lines and set your key and secret.

```javascript
const consumerKey = "CONSUMER_KEY";
const consumerSecret = "CONSUMER_SECRET";
```

> WARNING: It is best practice to use the VoxeetSDK.initializeToken function to initialize the SDK.
> Please read the documentation at:
> https://docs.dolby.io/communications-apis/docs/initializing-javascript

4. Now, simply open the file `index.html` in your web browser and start playing with the application.

> Make sure to read the [JavaScript documentation](https://docs.dolby.io/communications-apis/docs/js-overview) for the SDK.


## Report a Bug 
In the case any bugs occur, report it using Github issues, and we will see to it. 

## Forking
We welcome your interest in trying to experiment with our repos.

## Feedback 
If there are any suggestions or if you would like to deliver any positive notes, feel free to open an issue and let us know!

## Learn More

Spatial audio opens the door to a range of possibilities when building your web conferencing app, such as virtual events, meeting spaces, and collaboration tools. For this blog we kept it simple with a fixed place example, however, the tools work just as well for building a dynamically updating web app that adjusts spatial audio as the users move around in a 2D or 3D environment.

Whatever your next spatial project is, the Dolby.io team is here to help. Connect with us or check out a few of our helpful resources to dive deeper into the awesome world of spatial audio and Dolby.io:

- [Enabling Spatial Audio in Your Web Applications](https://dolby.io/blog/enabling-spatial-audio-in-your-web-applications/)
- [The Dolby.io Documentation for Integrating Spatial Audio](https://docs.dolby.io/communications-apis/docs/guides-integrating-spatial-audio)
- [The Dolby.io Web SDK reference](https://docs.dolby.io/communications-apis/docs/js-reference)
- [Best Security Practices When Handling API Keys](https://docs.dolby.io/communications-apis/docs/guides-security-best-practices)

## About Dolby.io

Using decades of Dolby's research in sight and sound technology, Dolby.io provides APIs to integrate real-time streaming, voice & video communications, and file-based media processing into your applications. [Sign up for a free account](https://dashboard.dolby.io/signup/) to get started building the next generation of immersive, interactive, and social apps.

<div align="center">
  <a href="https://dolby.io/" target="_blank"><img src="https://img.shields.io/badge/Dolby.io-0A0A0A?style=for-the-badge&logo=dolby&logoColor=white"/></a>
&nbsp; &nbsp; &nbsp;
  <a href="https://docs.dolby.io/" target="_blank"><img src="https://img.shields.io/badge/Dolby.io-Docs-0A0A0A?style=for-the-badge&logoColor=white"/></a>
&nbsp; &nbsp; &nbsp;
  <a href="https://dolby.io/blog/category/developer/" target="_blank"><img src="https://img.shields.io/badge/Dolby.io-Blog-0A0A0A?style=for-the-badge&logoColor=white"/></a>
</div>

<div align="center">
&nbsp; &nbsp; &nbsp;
  <a href="https://youtube.com/@dolbyio" target="_blank"><img src="https://img.shields.io/badge/YouTube-red?style=flat-square&logo=youtube&logoColor=white" alt="Dolby.io on YouTube"/></a>
&nbsp; &nbsp; &nbsp; 
  <a href="https://twitter.com/dolbyio" target="_blank"><img src="https://img.shields.io/badge/Twitter-blue?style=flat-square&logo=twitter&logoColor=white" alt="Dolby.io on Twitter"/></a>
&nbsp; &nbsp; &nbsp;
  <a href="https://www.linkedin.com/company/dolbyio/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="Dolby.io on LinkedIn"/></a>
</div>
