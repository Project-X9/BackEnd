const superagent = require("superagent");
const domainName = `http://localhost:${process.env.PORT}/api/v1`;
require("./../src/index");
describe("LOGIN (POST /login", () => 
  {
    describe("Valid Credentials", () => 
    {
        let response;
        beforeAll((done) => {
        return superagent
            .post(`${domainName}/users/login`)
            .type('application/json')
            .send({email: 'abdallahakrab@gmail.com', password: '123456'})
            .then(res => {
                console.log("RECEIVED RESPONSE");
                response = { ...res };
            })
            .then(() => done(),done)
            .catch(err => {
                console.log("RECEIVED ERROR");
                console.log(err.message);
            });
        });

        it("Successful login", (done) => {
            expect(response.status).toBe(200);
           done();
        });
    });
   });


   