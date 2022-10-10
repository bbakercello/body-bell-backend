const db = require('./Album')

function seedAlbums(){
    db.insertMany(
[{
    spotifyID: '1NNbw4ZB04Xk7IivNVnICu',
    artistID: '75HkJT1YV8rHpnNV5zMmOj',
    releaseDate: '2022',
    genre: 'natural surrealism',
    name: 'Some Myth or Tale'
},{
    spotifyID: '4GAvKS3pYV20DQ5zx6BUrh',
    artistID: '75HkJT1YV8rHpnNV5zMmOj',
    releaseDate: '2022',
    genre: 'natural surrealism',
    name: 'San'
},{
    spotifyID: '65kItFN8pY1k5CAautyZvb',
    artistID: '4v9RSKTiLC9leufHOZC2BV',
    releaseDate: '2022',
    genre: 'electronica',
    name: 'Birdfeed'
},{
    spotifyID: '4tbFsiPaT0KFgkrWoUCKWx',
    artistID: '0CdShur7VAAWDXyWYYFBHj',
    releaseDate: '2022',
    genre: 'indie',
    name: 'City Bidding'
},
])}

module.exports = seedAlbums