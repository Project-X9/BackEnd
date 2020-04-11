require(`../src/index`);
const superagent = require("superagent");
const domainName = `http://localhost:${process.env.PORT}/api/v1`;

var playlist_validID ='5e8cf0bc7d231c3bec30c4e1';
var playlist_invalidID ='5e8cf0bc7d231c3bec30c400';
var track='5e8cf03d7d231c3bec30c4de';


// describe ("Get playlist by", ()=>{

//     describe("valid ID", ()=>{

//         let response;
        
//         beforeAll(() => {
//         return superagent
//             .get(`${domainName}/playlist/${playlist_validID}`)
//             .type('application/json')
//             .send({id: playlist_validID})
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
//            // expect(response.body.data).toEqual(jasmine.objectContaining({}));
//             done();

//         });

//     })


//     describe("Invalid ID", ()=>{

//         let response;
//         beforeAll(() => {
//         return superagent
//             .get(`${domainName}/playlist/${playlist_validID}`)
//             .type('application/json')
//             .send({id: playlist_invalidID})
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
// // /////////////////////////////////////////////////////////////////

// describe("GET Playlist Tracks", () => 
// {
//   describe("using a valid id", () => 
//   {
//       let response;
//       beforeAll(() => {
//       return superagent
//           .get(`${domainName}/${playlist_validID}/tracks`)
//           .type('application/json')
//           .send({id: playlist_validID})
//           .then(res => {
//               console.log("RECEIVED RESPONSE");
//               response = { ...res };
//           })
//           .catch(err => {
//               console.log("RECEIVED ERROR");
//               console.log(err.message);
//           });
//       });
      
//       it("Status 200", (done) => {
//         expect(response.status).toEqual(200);
//         //expect(response.body.data).toEqual({"":['','']});
//         done();
//       });
//   });

//   //
//   describe("using a invalid id", () => 
//   {
//       let response;
//       beforeAll(() => {
//       return superagent
//           .get(`${domainName}/${playlist_invalidID}/tracks`)
//           .type('application/json')
//           .send({id: playlist_invalidID})
//           .then(res => {
//               console.log("RECEIVED RESPONSE");
//               response = { ...res };
//           })
//           .catch(err => {
//               console.log("RECEIVED ERROR");
//               console.log(err.message);
//           });
//       });
      
//       it("Status 200", (done) => {
//         expect(response.status).toEqual(200);
//         //expect(response.body.data).toEqual({"":['','']});
//         done();
//       });
//   });

//    });

/////////////////////////////////////////////////


