const superagent = require("superagent");
const domainName = `http://localhost:${process.env.PORT}/api/v1`;

var valid_id='5e91decfebb133310076a34f';//5e89f67c47f4092a9080d94b
  //---------------------------------------------------------------  get all categories ---------------------------------------------------------------//

//   describe("GET /browse/categories", () => 
//   {
//     describe("using a valid id", () => 
//     {
//         let response;
//         beforeAll(() => {
//         return superagent
//             .get(`${domainName}/browse/categories`)
//             .type('application/json')
//             .then(res => {
//                 console.log("RECEIVED RESPONSE");
//                 response = { ...res };
//             })
//             .catch(err => {
//                 console.log("RECEIVED ERROR");
//                 console.log(err.message);
//             });
//         });
//         it("Status 200", (done) => {
//             expect(response.status).toBe(200);
//             //expect(response.body.followers).toEqual(["5e8643edd411aa54c0357fbd","5e89fc7eb586021c3869f63e"]);
//            done();
//         });
//     });
//    });


  //---------------------------------------------------------------  get Category By Id ---------------------------------------------------------------//

  // describe("GET /category/:id", () => 
  // {
  //   describe("using a valid id", () => 
  //   {
  //       let response;
  //       beforeAll(() => {
  //       return superagent
  //           .get(`${domainName}/browse/category/${valid_id}`)
  //           .type('application/json')
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
  //           expect(response.status).toBe(200);
  //           expect(response.body.data.categ._id).toEqual(valid_id);
  //           expect(response.body.data.categ.name).toEqual("Rock");
  //          done();
  //       });
  //   });
  //  });


//---------------------------------------------------------------  delete Category By Id ---------------------------------------------------------------//

  // describe("delete /category/:id", () => 
  // {
  //   describe("using a valid id", () => 
  //   {
  //       let response;
  //       beforeAll(() => {
  //       return superagent
  //           .delete(`${domainName}/browse/category/${valid_id}`)
  //           .type('application/json')
  //           .then(res => {
  //               console.log("RECEIVED RESPONSE");
  //               response = { ...res };
  //           })
  //           .catch(err => {
  //               console.log("RECEIVED ERROR");
  //               console.log(err.message);
  //           });
  //       });
  //       it("Status 204", (done) => {
  //           expect(response.status).toBe(204);
  //          done();
  //       });
  //   });
  //  });






