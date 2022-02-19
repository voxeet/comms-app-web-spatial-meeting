// Track which participant is in which video container
let videoContainerList = [
	{ participantId: undefined },
	{ participantId: undefined },
	{ participantId: undefined },
	{ participantId: undefined },
	{ participantId: undefined },
	{ participantId: undefined },
	{ participantId: undefined },
	{ participantId: undefined },
	{ participantId: undefined },
];

let posList = [
	[undefined, 1, 1],
	[undefined, 2, 1],
	[undefined, 3, 1],
	[undefined, 1, 2],
	[undefined, 2, 2],
	[undefined, 2, 3],
	[undefined, 3, 1],
	[undefined, 3, 2],
	[undefined, 3, 3],
];

//Function for altering spatial positions as guests join
const setSpatialPosition = (participant) => {
	let spatialPosition = { x: 0, y: 0, z: 0 };

	for (let i = 0; i < posList.length; i++) {
		if (!posList[i][0] || participant.id == posList[i][0]) {
			posList[i][0] = participant.id;

			spatialPosition = {
				x: posList[i][1],
				y: posList[i][2],
				z: 0, // Only 2d so "z" is never changed
			};

			break;
		}
	}

	console.log(`Set Spatial Position for ${participant.id}`, spatialPosition);
	VoxeetSDK.conference.setSpatialPosition(participant, spatialPosition);
};

const initUI = () => {
	const joinButton = document.getElementById("join-btn");
	const conferenceAliasInput = document.getElementById("alias-input");
	const leaveButton = document.getElementById("leave-btn");
	const lblDolbyVoice = document.getElementById("label-dolby-voice");
	const startVideoBtn = document.getElementById("start-video-btn");
	const stopVideoBtn = document.getElementById("stop-video-btn");
	const startAudioBtn = document.getElementById("start-audio-btn");
	const stopAudioBtn = document.getElementById("stop-audio-btn");
	const startRecordingBtn = document.getElementById("start-recording-btn");
	const stopRecordingBtn = document.getElementById("stop-recording-btn");
	joinButton.disabled = false;

	joinButton.onclick = () => {
		// Default conference parameters
		// See: https://dolby.io/developers/interactivity-apis/client-sdk/reference-javascript/model/conferenceparameters
		let conferenceParams = {
			liveRecording: true,
			dolbyVoice: true,
		};

		// See: https://dolby.io/developers/interactivity-apis/client-sdk/reference-javascript/model/conferenceoptions
		let conferenceOptions = {
			alias: conferenceAliasInput.value,
			params: conferenceParams,
		};

		// 1. Create a conference room with an alias
		VoxeetSDK.conference
			.create(conferenceOptions)
			.then((conference) =>
				// See: https://dolby.io/developers/interactivity-apis/client-sdk/reference-javascript/model/joinoptions
				VoxeetSDK.conference.join(conference, {
					constraints: { audio: false, video: false },
					spatialAudio: true,
				})
			)
			.then(() => {
				conferenceAliasInput.disabled = true;
				joinButton.disabled = true;
				leaveButton.disabled = false;
				startVideoBtn.disabled = false;
				startAudioBtn.disabled = false;
				stopAudioBtn.disabled = true;
				startRecordingBtn.disabled = false;

				// scale for Z axis doesn't matter as we never provide a Z position, set it to 1
				// We set the scale as 1:10, so 1 meter in the physical world is 10 in our virtual conference
				const scale = {
					x: 1,
					y: 1,
					z: 1,
				};

				// Negative Y axis is heard in the forwards direction, so tell the SDK forward has -1 Y
				const forward = { x: 0, y: -1, z: 0 };
				// Upwards axis is unimportant for this case, we can set it to either Z = +1 or Z -1,
				// we never provide a Z position
				const up = { x: 0, y: 0, z: 1 };
				// Positive X axis is heard in the right-hand direction, so tell the SDK right has +1 X
				const right = { x: 1, y: 0, z: 0 };

				VoxeetSDK.conference.setSpatialEnvironment(scale, forward, up, right);
			})
			.catch((e) => console.log(e));
	};

	leaveButton.onclick = () => {
		// Leave the conference
		VoxeetSDK.conference
			.leave()
			.then(() => {
				lblDolbyVoice.innerHTML = "";
				conferenceAliasInput.disabled = false;
				joinButton.disabled = false;
				leaveButton.disabled = true;
				startVideoBtn.disabled = true;
				stopVideoBtn.disabled = true;
				startAudioBtn.disabled = true;
				stopAudioBtn.disabled = true;
				startRecordingBtn.disabled = true;
				stopRecordingBtn.disabled = true;
			})
			.catch((e) => console.log(e));
	};

	startVideoBtn.onclick = () => {
		// Start sharing the video with the other participants
		VoxeetSDK.conference
			.startVideo(VoxeetSDK.session.participant)
			.then(() => {
				startVideoBtn.disabled = true;
				stopVideoBtn.disabled = false;
			})
			.catch((e) => console.log(e));
	};

	stopVideoBtn.onclick = () => {
		// Stop sharing the video with the other participants
		VoxeetSDK.conference
			.stopVideo(VoxeetSDK.session.participant)
			.then(() => {
				stopVideoBtn.disabled = true;
				startVideoBtn.disabled = false;
			})
			.catch((e) => console.log(e));
	};

	startAudioBtn.onclick = () => {
		// Start sharing the Audio with the other participants
		VoxeetSDK.conference
			.startAudio(VoxeetSDK.session.participant)
			.then(() => {
				startAudioBtn.disabled = true;
				stopAudioBtn.disabled = false;
			})
			.catch((e) => console.log(e));
	};

	stopAudioBtn.onclick = () => {
		// Stop sharing the Audio with the other participants
		VoxeetSDK.conference
			.stopAudio(VoxeetSDK.session.participant)
			.then(() => {
				stopAudioBtn.disabled = true;
				startAudioBtn.disabled = false;
			})
			.catch((e) => console.log(e));
	};

	startRecordingBtn.onclick = () => {
		let recordStatus = document.getElementById("record-status");

		// Start recording the conference
		VoxeetSDK.recording
			.start()
			.then(() => {
				recordStatus.innerText = "Recording...";
				startRecordingBtn.disabled = true;
				stopRecordingBtn.disabled = false;
			})
			.catch((e) => console.log(e));
	};

	stopRecordingBtn.onclick = () => {
		let recordStatus = document.getElementById("record-status");

		// Stop recording the conference
		VoxeetSDK.recording
			.stop()
			.then(() => {
				recordStatus.innerText = "";
				startRecordingBtn.disabled = false;
				stopRecordingBtn.disabled = true;
			})
			.catch((e) => console.log(e));
	};
};

// Add a video stream to the web page
const addVideoNode = (participant, stream) => {
	let videoNode = document.getElementById("video-" + participant.id);

	if (!videoNode) {
		for (let i = 0; i < videoContainerList.length; i++) {
			if (videoContainerList[i].participantId === participant.id) {
        let cell = document.getElementById(`video-container-${i}`);
				videoNode = document.createElement("video");
				videoNode.setAttribute("id", "video-" + participant.id);
				videoNode.setAttribute("height", 240);
				videoNode.setAttribute("width", 320);
				videoNode.setAttribute("playsinline", true);
				videoNode.muted = true;
				videoNode.setAttribute("autoplay", "autoplay");
				videoNode.style = "background: gray;";
				cell.appendChild(videoNode);
        //Add banner with spatial position coords
				let nameText = document.createElement("div");
				nameText.setAttribute("class", "caption");
				nameText.innerText =
					"Speaking from spatial position:" +
					JSON.stringify({
						x: posList[i][1],
						y: posList[i][2],
						z: 0,
					});
				cell.appendChild(nameText);
				break;

			} else if (videoContainerList[i].participantId === undefined) {
        let cell = document.getElementById(`video-container-${i}`);
				videoNode = document.createElement("video");
				videoNode.setAttribute("id", "video-" + participant.id);
				videoNode.setAttribute("height", 240);
				videoNode.setAttribute("width", 320);
				videoNode.setAttribute("playsinline", true);
				videoNode.muted = true;
				videoNode.setAttribute("autoplay", "autoplay");
				videoNode.style = "background: gray;";
				cell.appendChild(videoNode);
				videoContainerList[i].participantId = participant.id;
        //Add banner with spatial position coords
				let nameText = document.createElement("div");
				nameText.setAttribute("class", "caption");
				nameText.innerText =
					"Speaking from spatial position:" +
					JSON.stringify({
						x: posList[i][1],
						y: posList[i][2],
						z: 0,
					});
				cell.appendChild(nameText);
				break;
			}
		}
	}
	navigator.attachMediaStream(videoNode, stream);
};

// Remove the video streem from the web page
const removeVideoNode = (participant) => {
	let videoNode = document.getElementById("video-" + participant.id);
	if (videoNode) {
		videoNode.srcObject = null;
		let caption = videoNode.parentNode.children[1];
		caption.remove();
		videoNode.parentNode.removeChild(videoNode);

    //Remove participant ID from the videoContainerList
		for (let i = 0; i < videoContainerList.length; i++) {
			if (videoContainerList[i].participantId === participant.id) {
				videoContainerList[i].participantId = undefined;
			}
		}

    //Remove participant ID from the posList
		for (let i = 0; i < posList.length; i++) {
			if (posList[i][0] === participant.id) {
				posList[i][0] = undefined;
			}
		}
	}
};

// Add a new participant to the list
const addParticipantNode = (participant) => {
	// If the participant is the current session user, don't add himself to the list
	if (participant.id === VoxeetSDK.session.participant.id) return;

	let participantNode = document.createElement("li");
	participantNode.setAttribute("id", "participant-" + participant.id);
	participantNode.innerText = `${participant.info.name}`;
	setSpatialPosition(participant);
};

// Remove a participant from the list
const removeParticipantNode = (participant) => {
	let participantNode = document.getElementById(
		"participant-" + participant.id
	);
	if (participantNode) {
		participantNode.parentNode.removeChild(participantNode);
	}
};
