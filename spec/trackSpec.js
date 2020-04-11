require('../src/index.js');
const domainName = `http://localhost:${process.env.PORT}/api/v1`;
const superagent = require("superagent");


var valid_id1="5e86459124471028e4d3539b";
var valid_id2 ="5e8cf03d7d231c3bec30c4de";


  describe("GET /tracks/:id", () => 
  {
    describe("using a valid id", () => 
    {
        let response;
        beforeAll(() => {
        return superagent
            .get(`${domainName}/track/${valid_id}`)
            .type('application/json')
            .then(res => {
                console.log("RECEIVED RESPONSE");
                response = { ...res };
            })
            .catch(err => {
                console.log("RECEIVED ERROR");
                console.log(err.message);
            });
        });
        it("Status 200", (done) => {
            expect(response.status).toBe(200);
            //expect(response.body.data.tracks._id).toEqual(valid_id1);
            //expect(response.body.data.tracks.name).toMatch("/song/");
           done();
        });
    });
   });


  describe("GET /tracks", () => 
  {
    describe("using a valid id", () => 
    {
        let response;
        beforeAll(() => {
        return superagent
            .get(`${domainName}/tracks`)
            .type('application/json')
            .then(res => {
                console.log("RECEIVED RESPONSE");
                response = { ...res };
            })
            .catch(err => {
                console.log("RECEIVED ERROR");
                console.log(err.message);
            });
        });
        it("Status 200", (done) => {
            expect(response.status).toBe(200);
            done();
        });
    });
   });


