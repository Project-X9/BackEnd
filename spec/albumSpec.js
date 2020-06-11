
require(`../src/index`);
const superagent = require("superagent");
const domainName = `http://localhost:${process.env.PORT}/api/v1`;

var album_validID ='5e8a52538e2b41014c9c0e57';
var album_invalidID ='5e8a52538e2b41014c9c0e333';
var track='5e8cf03d7d231c3bec30c4de';


// describe ("Get album by", ()=>{

//     describe("valid ID", ()=>{

//         let response;
        
//         beforeAll(() => {
//         return superagent
//             .get(`${domainName}/album/${album_validID}`)
//             .type('application/json')
//             .send({id: album_validID})
//             .then(res => {
//                 console.log("RECEIVED RESPONSE");
//                 response = { ...res };
//             })
//             .catch(err => {
//                 console.log("RECEIVED ERROR");
//                 console.log(err.message);
//             });
//         });

        
//         it("returns status 200", (done) => {
//             expect(response.status).toEqual(200);
//             done();

//         });

//     })




//     describe("Invalid ID", ()=>{

//         let response;
//         beforeAll(() => {
//         return superagent
//             .get(`${domainName}/album/${albumt_validID}`)
//             .type('application/json')
//             .send({id: album_invalidID})
//             .then(res => {
//                 console.log("RECEIVED RESPONSE");
//                 response = { ...res };
//             })
//             .catch(err => {
//                 console.log("RECEIVED ERROR");
//                 console.log(err.message);
//             });
//         });

        
//         it("returns status 404", (done) => {
//             expect(response.body.status).toEqual('fail');
//             done();

//         });

//     })

//  });
