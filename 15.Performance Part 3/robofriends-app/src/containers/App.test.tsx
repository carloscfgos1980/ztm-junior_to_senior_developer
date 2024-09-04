import { fetchUsers} from "../redux/filteredRobots";
import axios from 'axios'

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetching Robots', () => {   
    // test('fetching url', async() => {
    //     const robots = await fetchUsers();
    //     console.log(robots)
    //     expect(robots.users[0].name).toBe('Leanne Graham');
    // });

        test('fake API', async () => {
        // Mock axios:
        const usersData = {
                    id: 1,
                    name: 'Carlos Infante',
                    username: 'Bret',
                    email: 'Sincere@april.biz'       
            }
        const resp = {data: usersData};
        mockedAxios.get.mockResolvedValue(resp);

        const fetchedUsers = await fetchUsers();
        expect(fetchedUsers.users.name).toBe('Carlos Infante');
    });
});