# Dolby.io Web SDK Fixed Spatial Audio Sample Application

This sample application for the Dolby.io Web SDK is a spatial audio enabled version of the [getting started](https://docs.dolby.io/communications-apis/docs/create-a-basic-audio-conference-application) project included in conjunction with this [blog](https://docs.dolby.io).

## Where to start

If you haven't done so already, create an account on [dolby.io](https://dolby.io/signup), it is free so do it today! Go to your dashboard and for the first application, get your `Consumer Key` and `Consumer Secret`.

In the file `src/scripts/client.js`, locate the following lines and set your key and secret.

```javascript
const consumerKey = "CONSUMER_KEY";
const consumerSecret = "CONSUMER_SECRET";
```

> WARNING: It is best practice to use the VoxeetSDK.initializeToken function to initialize the SDK.
> Please read the documentation at:
> https://docs.dolby.io/communications-apis/docs/initializing-javascript

Now, simply open the file `index.html` in your web browser and start playing with the application.

> Make sure to read the [JavaScript documentation](https://docs.dolby.io/communications-apis/docs/js-overview) for the SDK.


## Next Steps

Spatial audio opens the door to a range of possibilities when building your web conferencing app, such as virtual events, meeting spaces, and collaboration tools. For this blog we kept it simple with a fixed place example, however, the tools work just as well for building a dynamically updating web app that adjusts spatial audio as the users move around in a 2D or 3D environment.

Whatever your next spatial project is, the Dolby.io team is here to help. Connect with us or check out a few of our helpful resources to dive deeper into the awesome world of spatial audio and Dolby.io:

- [Enabling Spatial Audio in Your Web Applications](https://dolby.io/blog/enabling-spatial-audio-in-your-web-applications/)
- [The Dolby.io Documentation for Integrating Spatial Audio](https://docs.dolby.io/communications-apis/docs/guides-integrating-spatial-audio)
- [The Dolby.io Web SDK reference](https://docs.dolby.io/communications-apis/docs/js-reference)
- [Best Security Practices When Handling API Keys](https://docs.dolby.io/communications-apis/docs/guides-security-best-practices)
