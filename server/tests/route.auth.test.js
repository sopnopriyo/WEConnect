import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

const { expect } = chai;
chai.use(chaiHttp);
const BASE_URL = '/api/v1';


describe('Authentication Routes', () => {
  // Path auth/signup
  describe(`${BASE_URL}/auth/signup`, () => {
    // Method POST
    const path = `${BASE_URL}/auth/signup`;
    describe('POST', () => {
      // All requests are okay
      it('should return a success status and object of user', (done) => {
        chai.request(app)
          .post(path)
          .send({
            name: 'John David', email: 'email@yahoo.com', phone: '08164488989', password: 'password', confirmPassword: 'password',
          })
          .end((err, res) => {
            expect(res).to.have.status(201);
            expect(res.body.status).to.equal('success');
            expect(res.body.data.user).to.include({ name: 'John David' });
            done();
          });
      });

      it('should return Unprocessable entity code for missing required variables', (done) => {
        chai.request(app)
          .post(path)
          .send({
            name: 'John David', password: 'password', confirmPassword: 'password',
          })
          .end((err, res) => {
            expect(res).to.have.status(422);
            expect(res.body.status).to.equal('fail');
            expect(res.body.data).to.have.all.keys('email', 'phone');
            done();
          });
      });


      it('should return Unprocessable entity code for password not matching', (done) => {
        chai.request(app)
          .post(path)
          .send({
            name: 'John David', email: 'email@yahoo.com', phone: '08164488989', password: 'password', confirmPassword: 'Password',
          })
          .end((err, res) => {
            expect(res).to.have.status(422);
            expect(res.body.status).to.equal('fail');
            expect(res.body.data).to.have.key('confirmPassword');
            done();
          });
      });
    });
  });


  // Path login
  describe(`${BASE_URL}/auth/login`, () => {
  // Method POST
    const path = `${BASE_URL}/auth/login`;
    describe('POST', () => {
    // All requests are okay
      it('should return success for email and matching password', (done) => {
        chai.request(app)
          .post(path)
          .send({
            email: 'daveholuborhee@gmail.com', password: 'password',
          })
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body.status).to.equal('success');
            expect(res.body.data.user).to.include({ name: 'Olubori David' });
            done();
          });
      });

      it('should return success for phone and matching password', (done) => {
        chai.request(app)
          .post(path)
          .send({
            phone: '08164488989', password: 'password',
          })
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body.status).to.equal('success');
            expect(res.body.data.user).to.include({ name: 'Olubori David' });
            done();
          });
      });


      it('should return Unauthorized code for wrong password', (done) => {
        chai.request(app)
          .post(path)
          .send({
            email: 'daveholuborhee@gmail.com', password: 'ssword',
          })
          .end((err, res) => {
            expect(res).to.have.status(401);
            expect(res.body.status).to.equal('fail');
            expect(res.body.data).to.have.key('password');
            done();
          });
      });

      it('should return Unauthorized code for wrong email', (done) => {
        chai.request(app)
          .post(path)
          .send({
            email: 'daveholubo@gmail.com', password: 'password',
          })
          .end((err, res) => {
            expect(res).to.have.status(401);
            expect(res.body.status).to.equal('fail');
            expect(res.body.data).to.have.key('email');
            done();
          });
      });

      it('should return Unauthorized code for wrong phone', (done) => {
        chai.request(app)
          .post(path)
          .send({
            phone: '35454545454', password: 'password',
          })
          .end((err, res) => {
            expect(res).to.have.status(401);
            expect(res.body.status).to.equal('fail');
            expect(res.body.data).to.have.key('phone');
            done();
          });
      });


      it('should return Unprocessed entity if any value is missing', (done) => {
        chai.request(app)
          .post(path)
          .send({
            password: 'password',
          })
          .end((err, res) => {
            expect(res).to.have.status(422);
            expect(res.body.status).to.equal('fail');
            expect(res.body.data).to.have.all.keys('phone', 'email');
            done();
          });
      });
    });
  });
});

