const axios = require('axios');
// import mockAxios from "axios";

const {fetchData, STAR_WAR_API, fetchStarWar2} = require('./script2')

jest.mock("axios");

describe('fetching Star War Data', () => {
    test('call swapi to get people', () => {
        return fetchData(STAR_WAR_API).then(data => {
            console.log(data)
            expect(data.count).toBe(87);
        });
    });


    
    test('fake API', async () => {
        // Mock axios:
        const starWar = 
           {
                count:22, 
                results:['Luke', 'Sky']
           };
        const resp = {data: starWar};
        axios.get.mockResolvedValue(resp);

        const getSwapi = await fetchStarWar2();
        console.log(getSwapi);
        expect(getSwapi.count).toBe(22);
    });
});