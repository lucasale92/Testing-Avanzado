import chai from 'chai';
import supertest from 'supertest';

const expect = chai.expect;
const requester = supertest('http://127.0.0.1:8080');

describe('Testing Product Routes', () => {
  it('El metodo GET trae todos los productos de la base de datos', async () => {
    const response = await requester.get('/api/products');
    const { status, ok, body } = response;
    /* console.log(status, ok, body); */
    expect(status).to.equal(200);
    expect(ok).to.be.true;
    expect(body.payload.docs).to.be.an('array');
  });

  it('Obtengo un producto por su ID', async () => {
    const response = await requester.get('/api/products/647e76e3f2fe3f6509a309c3');
    const { status, ok, body } = response;
    expect(status).to.equal(200);
    expect(ok).to.be.true;
    expect(body.payload).to.be.an('object');
    expect(body.payload).to.have.property('_id', '647e76e3f2fe3f6509a309c3');
  });
});