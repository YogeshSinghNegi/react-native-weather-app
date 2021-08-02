
// const mockApi = new MockAdapter(apiClient);
const mockData = {"cod":"200","message":0,"cnt":40,"list":[{"dt":1589220000,"main":{"temp":305.15,"feels_like":301.8,"temp_min":305.15,"temp_max":306.2,"pressure":1007,"sea_level":1007,"grnd_level":983,"humidity":37,"temp_kf":-1.05},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":55},"wind":{"speed":7.34,"deg":314},"rain":{"3h":0.32},"sys":{"pod":"n"},"dt_txt":"2020-05-11 18:00:00"}],"city":{"name":"Daulatpur","coord":{"lat":28.5466,"lon":76.9593},"country":"IN","timezone":19800,"sunrise":1589155436,"sunset":1589203992}}
const badData = {}

import * as axios from "axios";

// Mock out all top level functions, such as get, put, delete and post:
jest.mock("axios");

test("good response", () => {
 axios.get.mockImplementation(() => Promise.resolve({ data: mockData }));
});

