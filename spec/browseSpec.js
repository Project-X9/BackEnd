// //SELECT ALL ,CTRL+ / TO UNCOMMENT THIS FILE TO BE ABLE TO RUN

// const superagent = require("superagent");
// const domainName = `http://localhost:${process.env.PORT}/api/v1`;

//  var valid_id='5e9234530918c33964e9d876';
//  var playlist='5e92355d109905182c071ce6';

//  require("./../src/index");
// //----------------------------------------------- create category------------------------------------------------------//
// describe("patch /browse/category", () => 
// {
//   describe("valid id", () => 
//   {
//       let response;
//       beforeAll((done) => {
//       return superagent
//           .post(`${domainName}/browse/category`)
//           .type('application/json')
//           .send({name:'rock',icon:'https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a'})
//           .then(res => {
//               response = { ...res };
//           })
//           .then(()=>done(),done)
//           .catch(err => {
//               console.log(err.message);
//           });
//       });
      
//       it("Status 201", (done) => {
//         expect(response.statusCode).toBe(201);
//         done();
//       });
//   });
//   });


// //----------------------------------------------- update category------------------------------------------------------//
// describe("patch /browse/category/:id", () => 
// {
//   describe("valid id", () => 
//   {
//       let response;
//       beforeAll((done) => {
//       return superagent
//           .patch(`${domainName}/browse/category/${valid_id}`)
//           .type('application/json')
//           .send({name:'hiphop'})
//           .then(res => {
//               response = { ...res };
//           })
//           .then(()=>done(),done)
//           .catch(err => {
//               console.log(err.message);
//           });
//       });
      
//       it("Status 200", (done) => {
//         expect(response.statusCode).toBe(200);
//         done();
//       });
//   });
//   });

// //   //---------------------------------------------------------------  get all categories ---------------------------------------------------------------//

//   describe("GET /browse/categories", () => 
//   {
//     describe("valid id", () => 
//     {
//         let response;
//         beforeAll(() => {
//         return superagent
//             .get(`${domainName}/browse/categories`)
//             .type('application/json')
//             .then(res => {
//                 response = { ...res };
//             })
//             .catch(err => {
//                 console.log(err.message);
//             });
//         });
//         it("Status 200", (done) => {
//             expect(response.status).toBe(200);
//            done();
//         });
//     });
//    });


// //   //---------------------------------------------------------------  get Category By Id ---------------------------------------------------------------//

//   describe("GET /category/", () => 
//   {
//     describe("valid id", () => 
//     {
//         let response;
//         beforeAll((done) => {
//         return superagent
//             .get(`${domainName}/browse/category/${valid_id}`)
//             .type('application/json')
//             .then(res => {
//                 response = { ...res };
//             })
//             .then(()=>done(),done)
//             .catch(err => {
//                 console.log(err.message);
//             });
//         });
//         // it("Status 404", (done) => {
//         //   //expect(response).not.toBeDefined();
//         //   expect(response.status).toBe(404);
//         //   done();
//         // });
//         it("Status 200", (done) => {
//             expect(response.status).toBe(200);
//            expect(response.body.data.categ._id).toEqual(valid_id);
//             //expect(response.body.data.categ.name).toEqual("khaled");
//            done();
//         });
//     });
//    });


//    //-----------------------------------------------Follow playlist------------------------------------------------------//
//   describe("patch /browse/categoryPlaylist", () => 
//   {
//     describe("valid id", () => 
//     {
//         let response;
//         beforeAll(() => {
//         return superagent
//             .patch(`${domainName}/browse/categoryPlaylist/${playlist}`)
//             .type('application/json')
//             .send({id: valid_id})
//             .then(res => {
//                 response = { ...res };
//             })
//             .catch(err => {
//                 console.log(err.message);
//             });
//         });
        
//         it("Status 200", (done) => {
//           expect(response.status).toBe(200);
//           done();
//         });
//     });
//     });

// //-----------------------------------------------unFollow playlist------------------------------------------------------//
// describe("patch /browse/categoryPlaylist/un", () => 
// {
//   describe("valid id", () => 
//   {
//       let response;
//       beforeAll(() => {
//       return superagent
//           .patch(`${domainName}/browse/categoryPlaylist/un/${playlist}`)
//           .type('application/json')
//           .send({id: valid_id})
//           .then(res => {
//               response = { ...res };
//           })
//           .catch(err => {
//               console.log(err.message);
//           });
//       });
      
//       it("Status 200", (done) => {
//         expect(response.status).toBe(200);
//         done();
//       });
//   });
//   });







// //---------------------------------------------------------------  delete Category By Id ---------------------------------------------------------------//

//   // describe("delete /category/:id", () => 
//   // {
//   //   describe("valid id", () => 
//   //   {
//   //       let response;
//   //       beforeAll(() => {
//   //       return superagent
//   //           .delete(`${domainName}/browse/category/${valid_id}`)
//   //           .type('application/json')
//   //           .then(res => {
//   //               response = { ...res };
//   //           })
//   //           .catch(err => {
//   //               console.log(err.message);
//   //           });
//   //       });
//   //       it("Status 204", (done) => {
//   //           expect(response.status).toBe(204);
//   //          done();
//   //       });
//   //   });
//   //  });


  
