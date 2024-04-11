import { Character } from "@/components/CharacterCard";
import { Episode } from "@/components/EpisodeCard";
import axios from "axios";
const baseUrl = "https://rickandmortyapi.com/api";
const instance = axios.create({ baseURL: baseUrl });
export const getCharacters = async (url?: string) => {
	return await instance.get(url || "/character");
};

export const getCharacterById = async (id: Character["id"]) => {
	return instance.get(`/character/${id}`).then(async (res) => {
		const episodes: { data: Episode }[] = await axios.all(
			res.data.episode.map((episodeLink: string) => axios.get(episodeLink))
		);
		res.data["episodes"] = episodes.map((el) => el.data);
		return res.data;
	});
};
