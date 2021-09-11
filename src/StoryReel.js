import React from 'react';
import Story from './Story';
import "./StoryReel.css";


function StoryReel() {
	return (
		<div className="storyReel">
			<Story
				image="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
				profileSrc="https://picsum.photos/id/0/200/300"
				title="RawG"
				 />
			<Story
				image="https://i.picsum.photos/id/1/5616/3744.jpg?hmac=kKHwwU8s46oNettHKwJ24qOlIAsWN9d2TtsXDoCWWsQ"
				profileSrc="https://picsum.photos/id/1/200/300"
				title="BhawG"
				 />
			<Story
				image="https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk"
				profileSrc="https://picsum.photos/id/1011/200/300"
				title="GauG"
				 />
			<Story
				image="https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE"
				profileSrc="https://picsum.photos/id/1001/200/300"
				title="FauG"
				 />
			<Story
				image="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
				profileSrc="https://picsum.photos/id/1005/200/300"
				title="MauG"
				 />
		</div>
	);
}

export default StoryReel;