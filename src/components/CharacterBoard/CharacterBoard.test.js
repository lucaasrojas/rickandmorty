import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import CharacterBoard from "./CharacterBoard.tsx"
import * as api from "../../app/api"
import { act } from 'react-dom/test-utils'
jest.mock("../../app/api");

const mockedCharacters = {
    data: {
        "info": {
            "count": 826,
            "pages": 42,
            "next": "https://rickandmortyapi.com/api/character/?page=2",
            "prev": null
        },
        "results": [
            {
                "id": 1,
                "name": "Rick Sanchez",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "Earth",
                    "url": "https://rickandmortyapi.com/api/location/1"
                },
                "location": {
                    "name": "Earth",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/1",
                    "https://rickandmortyapi.com/api/episode/2",
                    // ...
                ],
                "url": "https://rickandmortyapi.com/api/character/1",
                "created": "2017-11-04T18:48:46.250Z"
            },
            {
                "id": 2,
                "name": "Rick Sanchez",
                "status": "Alive",
                "species": "Human",
                "type": "",
                "gender": "Male",
                "origin": {
                    "name": "Earth",
                    "url": "https://rickandmortyapi.com/api/location/1"
                },
                "location": {
                    "name": "Earth",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/1",
                    "https://rickandmortyapi.com/api/episode/2",
                    // ...
                ],
                "url": "https://rickandmortyapi.com/api/character/1",
                "created": "2017-11-04T18:48:46.250Z"
            }
        ]
    }
}
const mockedCharacterWithEpisodes = {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z",
    "episodes": [
        {
            "id": 1,
            "name": "Pilot",
            "air_date": "December 2, 2013",
            "episode": "S01E01",
            "characters": [
                "https://rickandmortyapi.com/api/character/1",
                "https://rickandmortyapi.com/api/character/2",
                "https://rickandmortyapi.com/api/character/35",
                "https://rickandmortyapi.com/api/character/38",
                "https://rickandmortyapi.com/api/character/62",
                "https://rickandmortyapi.com/api/character/92",
                "https://rickandmortyapi.com/api/character/127",
                "https://rickandmortyapi.com/api/character/144",
                "https://rickandmortyapi.com/api/character/158",
                "https://rickandmortyapi.com/api/character/175",
                "https://rickandmortyapi.com/api/character/179",
                "https://rickandmortyapi.com/api/character/181",
                "https://rickandmortyapi.com/api/character/239",
                "https://rickandmortyapi.com/api/character/249",
                "https://rickandmortyapi.com/api/character/271",
                "https://rickandmortyapi.com/api/character/338",
                "https://rickandmortyapi.com/api/character/394",
                "https://rickandmortyapi.com/api/character/395",
                "https://rickandmortyapi.com/api/character/435"
            ],
            "url": "https://rickandmortyapi.com/api/episode/1",
            "created": "2017-11-10T12:56:33.798Z"
        },
        {
            "id": 2,
            "name": "Lawnmower Dog",
            "air_date": "December 9, 2013",
            "episode": "S01E02",
            "characters": [
                "https://rickandmortyapi.com/api/character/1",
                "https://rickandmortyapi.com/api/character/2",
                "https://rickandmortyapi.com/api/character/38",
                "https://rickandmortyapi.com/api/character/46",
                "https://rickandmortyapi.com/api/character/63",
                "https://rickandmortyapi.com/api/character/80",
                "https://rickandmortyapi.com/api/character/175",
                "https://rickandmortyapi.com/api/character/221",
                "https://rickandmortyapi.com/api/character/239",
                "https://rickandmortyapi.com/api/character/246",
                "https://rickandmortyapi.com/api/character/304",
                "https://rickandmortyapi.com/api/character/305",
                "https://rickandmortyapi.com/api/character/306",
                "https://rickandmortyapi.com/api/character/329",
                "https://rickandmortyapi.com/api/character/338",
                "https://rickandmortyapi.com/api/character/396",
                "https://rickandmortyapi.com/api/character/397",
                "https://rickandmortyapi.com/api/character/398",
                "https://rickandmortyapi.com/api/character/405"
            ],
            "url": "https://rickandmortyapi.com/api/episode/2",
            "created": "2017-11-10T12:56:33.916Z"
        },
        {
            "id": 3,
            "name": "Anatomy Park",
            "air_date": "December 16, 2013",
            "episode": "S01E03",
            "characters": [
                "https://rickandmortyapi.com/api/character/1",
                "https://rickandmortyapi.com/api/character/2",
                "https://rickandmortyapi.com/api/character/12",
                "https://rickandmortyapi.com/api/character/17",
                "https://rickandmortyapi.com/api/character/38",
                "https://rickandmortyapi.com/api/character/45",
                "https://rickandmortyapi.com/api/character/96",
                "https://rickandmortyapi.com/api/character/97",
                "https://rickandmortyapi.com/api/character/98",
                "https://rickandmortyapi.com/api/character/99",
                "https://rickandmortyapi.com/api/character/100",
                "https://rickandmortyapi.com/api/character/101",
                "https://rickandmortyapi.com/api/character/108",
                "https://rickandmortyapi.com/api/character/112",
                "https://rickandmortyapi.com/api/character/114",
                "https://rickandmortyapi.com/api/character/169",
                "https://rickandmortyapi.com/api/character/175",
                "https://rickandmortyapi.com/api/character/186",
                "https://rickandmortyapi.com/api/character/201",
                "https://rickandmortyapi.com/api/character/268",
                "https://rickandmortyapi.com/api/character/300",
                "https://rickandmortyapi.com/api/character/302",
                "https://rickandmortyapi.com/api/character/338",
                "https://rickandmortyapi.com/api/character/356"
            ],
            "url": "https://rickandmortyapi.com/api/episode/3",
            "created": "2017-11-10T12:56:34.022Z"
        },
       
        {
            "id": 20,
            "name": "Look Who's Purging Now",
            "air_date": "September 27, 2015",
            "episode": "S02E09",
            "characters": [
                "https://rickandmortyapi.com/api/character/1",
                "https://rickandmortyapi.com/api/character/2",
                "https://rickandmortyapi.com/api/character/3",
                "https://rickandmortyapi.com/api/character/4",
                "https://rickandmortyapi.com/api/character/5",
                "https://rickandmortyapi.com/api/character/26",
                "https://rickandmortyapi.com/api/character/139",
                "https://rickandmortyapi.com/api/character/202",
                "https://rickandmortyapi.com/api/character/273",
                "https://rickandmortyapi.com/api/character/341"
            ],
            "url": "https://rickandmortyapi.com/api/episode/20",
            "created": "2017-11-10T12:56:35.772Z"
        }
    ]
}

describe('CharacterBoard', () => {
    test('should load character list', async () => {
        jest.spyOn(api, "getCharacters").mockResolvedValue(mockedCharacters)
        await act(async () => {
            await render(<CharacterBoard title='My Character' onSelection={() => { }} />)
        })

        const cards = await screen.getAllByTestId('character-card')

        expect(cards.length).toBe(2)
    })

    test('should render the title sent by props', async () => {
        jest.spyOn(api, "getCharacters").mockResolvedValue(mockedCharacters)
        await act(async () => {
            await render(<CharacterBoard title='My Character' onSelection={() => { }} />)
        })

        const title = await screen.getByTestId('character-board-title')

        expect(title.innerHTML).toBe("My Character")
    })

    test('should send the selected character on click', async () => {
        jest.spyOn(api, "getCharacters").mockResolvedValue(mockedCharacters)
        jest.spyOn(api, "getCharacterById").mockResolvedValue(mockedCharacterWithEpisodes)
        const mockOnSelection = jest.fn()
        await act(async () => {
            await render(<CharacterBoard title='My Character' onSelection={mockOnSelection} />)
        })

        const card = await screen.getAllByTestId("character-card")
        await waitFor(async () => {

            await fireEvent.click(card[0])
        })

        expect(mockOnSelection).toHaveBeenCalledWith(mockedCharacterWithEpisodes.episodes)
    })
})