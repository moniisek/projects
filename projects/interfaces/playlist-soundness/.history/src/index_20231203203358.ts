// Write your unrollPlaylist function and types here! ✨

interface Song {
	type: "song";
	artist: string[];
	length: number;
	name: string;
}

interface Album {
	type: "album";
	songs: Song[];
}

interface Playlist {
	type: "playlist";
	resolve: () => Song[];
}

interface PlaylistItem {
	artists: { [index: string]: string[] };
	songs: string[];
	time: number;
}

export function unrollPlaylist(
	items: (Song | Album | Playlist)[]
): PlaylistItem {
	let time = 0;
	const songs: string[] = [];
	const artists = new Map();
	const addArtist = (song: string) => (artist: string) => {
		if (artists.has(artist)) {
			const songs = artists.get(artist);
			songs.push(song);
		} else {
			artists.set(artist, [song]);
		}
	};

	function handleSong(song: Song) {
		song.artist.forEach(addArtist(song.name));
		songs.push(song.name);
		time += song.length;
	}

	for (const item of items) {
		switch (item.type) {
			case "song":
				handleSong(item);
				break;
			case "album":
				item.songs.forEach(handleSong);
				break;
			case "playlist":
				item.resolve().forEach(handleSong);
				break;
		}
	}

	return {
		artists: Object.fromEntries(artists),
		songs,
		time,
	};
}
// You'll need to export the function so the tests can run it.
