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

