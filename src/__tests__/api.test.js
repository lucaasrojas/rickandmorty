import axios from "axios"
import { getCharacters } from "../app/api";

jest.mock("axios", () => {
    return {
        create: jest.fn(() => axios),
        get: jest.fn(() => Promise.resolve())
    };
});
describe('API', () => {

    test('getCharacters should use baseurl and correct route', async () => {
        getCharacters()
        expect(axios.get).toHaveBeenCalledWith("/character")
    })

    
})