const googleSearch = require('./script')

const dbMock = [
    'dog.com',
    'chessypuff',
    'disney.com',
    'dogpisctures.com'
]

describe('google search', () => {
    test('is searching google', ()=> {
        expect(googleSearch('testtest', dbMock)).toEqual([]);
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpisctures.com']);
    })
    
    test('works with undefined and null inputs', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    });
    
    test('it does not return more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    
    });
})
