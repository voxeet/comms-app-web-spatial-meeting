const main = async (consumerKey, consumerSecret) => {
	/* Event handlers */

	// When a stream is added to the conference
	VoxeetSDK.conference.on("streamAdded", (participant, stream) => {
		if (stream.getVideoTracks().length) {
			// Only add the video node if there is a video track
			addVideoNode(participant, stream);
		}

		addParticipantNode(participant);
	});

	// When a stream is updated
	VoxeetSDK.conference.on("streamUpdated", (participant, stream) => {
		if (stream.getVideoTracks().length) {
			// Only add the video node if there is a video track
			addVideoNode(participant, stream);
		} else {
			removeVideoNode(participant);
		}
	});

	// When a stream is removed from the conference
	VoxeetSDK.conference.on("streamRemoved", (participant, stream) => {
		removeVideoNode(participant);
		removeParticipantNode(participant);
	});

	try {
		// Initialize the Voxeet SDK
		// WARNING: It is best practice to use the VoxeetSDK.initializeToken function to initialize the SDK.
		// Please read the documentation at:
		// https://dolby.io/developers/interactivity-apis/client-sdk/initializing
		if (consumerKey === "Insert your Communications APIs Consumer Key here") {
			alert(
				"ERROR: Update client.js with your Consumer Key and Consumer Secret Key"
			);
		}

		VoxeetSDK.initialize(consumerKey, consumerSecret);

		// Open a session for the user
		await VoxeetSDK.session.open({ name: "Fixed-Place-Spatial-Demo" });

		// Initialize the UI
		initUI();
	} catch (e) {
		alert("Something went wrong : " + e);
	}
};

//Update with your API Keys
main(
	"Insert_Your_Consumer_Key_Here",
	"Insert_Your_Consumer_Secret_Here"
);
