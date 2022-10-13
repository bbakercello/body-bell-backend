const db = require('./Message')

function seedArtists(){
    db.insertMany(
[{
    message: 'is this out on vinyl?',
    artist: '634754b313635b748891fb5c'
},{
    message: 'where did you record this?',
    artist: '634754b313635b748891fb5d'
},{
    message: 'hahaha cool',
    artist: '634754b313635b748891fb5e'
}
])}

module.exports = seedArtists