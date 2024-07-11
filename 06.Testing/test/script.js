const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catspictures.com',
    'myfavoritecats.com'
];


const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => {
        return website.includes(searchInput);
    });
    // Ternary comparison to make sure that the output is not larger than 3
    return matches.length > 3 ? matches.slice(0,3) : matches;
}

// const soup = googleSearch('soup', googleDatabase);
// const cat = googleSearch('cats', googleDatabase);

// console.log('soup', soup);
// console.log('cats', cat);

module.exports = googleSearch;