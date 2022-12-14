/**
 * @jest-environment ./src/data-source/custom-environment.js
 */

import express from "express";
import request from "supertest";
import { PurchaseRouter } from "../src/router/purchaseRouter";
import { StockRouter } from "../src/router/stokRouter";

describe("Teste ponta a ponta da API", () => {
  const registerPurchaseRouter = "/Purchase/register";
  const getAllStockRouter = "/stock/all";
  const updateStockRouter = "/stock/update";

  let allProductsInStock = null;
  let productInStock = null;
  let productPurchased = null;
  let purchase = null;
  
  const app = express()
  app.use(express.json())
  app.use("/purchase", PurchaseRouter);
  app.use("/stock", StockRouter);

  beforeAll(async () => {
    

    allProductsInStock = await request(app).get(getAllStockRouter);
    productInStock = { ...allProductsInStock.body[0] };
    productPurchased = { id: productInStock.id, qty_purchased: 100 };
    purchase = {
      clientName: "adeir",
      totalPrice: 10,
      productsPurchased: [productPurchased],
      deliveryDate: "2022-10-02",
    };
  });

  afterAll(async () => {
    
  })
  describe("Test entity Purchase", () => {
    it("test endpoint Purchase register sucess!", async () => {
      const { body, status, error } = await request(app)
        .post(registerPurchaseRouter)
        .send(purchase);

      expect(status).toBe(201);
      expect(body).toBeInstanceOf(Object);
      expect(body).toHaveProperty("clientName", "adeir");
      expect(body).toHaveProperty("totalPrice", 10);
      expect(body).toHaveProperty(
        "productsPurchased",
        JSON.stringify([productPurchased])
      );
      expect(body).toHaveProperty(
        "deliveryDate",
        new Date("2022-10-02").toISOString()
      );
      expect(error).toBeFalsy();
    });

    it("test Purchase registration endpoint failed because of missing clientName", async () => {
      const failPurchased = { ...purchase, clientName: null };
      const { body, status, error } = await request(app)
        .post(registerPurchaseRouter)
        .send(failPurchased);

      expect(status).toBe(422);
      expect(error).toBeTruthy();
      expect(body).toMatchObject({
        message: "clientName deve ser uma string e clientName ?? requerido",
      });
    });

    it("test Purchase registration endpoint failed because of missing totalPrice", async () => {
      const failPurchased = { ...purchase, totalPrice: null };
      const { body, status, error } = await request(app)
        .post(registerPurchaseRouter)
        .send(failPurchased);

      expect(status).toBe(422);
      expect(error).toBeTruthy();
      expect(body).toMatchObject({
        message:
          "totalPrice deve ser um numero positivo e totalPrice deve ser um numero",
      });
    });

    it("test Purchase registration endpoint failed because of invalid totalPrice", async () => {
      const failPurchased = { ...purchase, totalPrice: -5 };
      const { body, status, error } = await request(app)
        .post(registerPurchaseRouter)
        .send(failPurchased);

      expect(status).toBe(422);
      expect(error).toBeTruthy();
      expect(body).toMatchObject({
        message: "totalPrice deve ser um numero positivo",
      });
    });

    it("test Purchase registration endpoint failed because of missing producsPurchased", async () => {
      const failPurchased = { ...purchase, productsPurchased: null };
      const { body, status, error } = await request(app)
        .post(registerPurchaseRouter)
        .send(failPurchased);

      expect(status).toBe(422);
      expect(error).toBeTruthy();
      expect(body).toMatchObject({
        message:
          "productsPurchased deve ser um array de produtos e productsPurchased ?? requerido",
      });
    });

    it("test Purchase registration endpoint failed bacause of inv??lid productsPurchased", async () => {
      const failPurchased = { ...purchase, productsPurchased: [] };
      const { body, status, error } = await request(app)
        .post(registerPurchaseRouter)
        .send(failPurchased);

      expect(status).toBe(422);
      expect(error).toBeTruthy();
      expect(body).toMatchObject({
        message: "H?? um erro na lista de produtos comprados",
      });
    });

    it("test Purchase registration endpoint failed bacause of id of product purchased is inv??lid", async () => {
      const failPurchased = {
        ...purchase,
        productsPurchased: [{ id: null, qty_purchased: 5 }],
      };
      const { body, status, error } = await request(app)
        .post(registerPurchaseRouter)
        .send(failPurchased);

      expect(status).toBe(422);
      expect(error).toBeTruthy();
      expect(body).toMatchObject({
        message: "H?? um erro na lista de produtos comprados",
      });
    });

    it("test Purchase registration endpoint failed bacause of quantity of product purchased is inv??lid", async () => {
      const failPurchased = {
        ...purchase,
        productsPurchased: [
          {
            id: "fcb35c21-ab15-49c3-847e-fe987409591b",
            qty_purchased: -5,
          },
        ],
      };
      const { body, status, error } = await request(app)
        .post(registerPurchaseRouter)
        .send(failPurchased);

      expect(status).toBe(422);
      expect(error).toBeTruthy();
      expect(body).toMatchObject({
        message: "H?? um erro na lista de produtos comprados",
      });
    });

    it("test Purchase registration endpoint failed bacause of product purchased not existis in database", async () => {
      const failPurchased = {
        ...purchase,
        productsPurchased: [
          {
            id: "asdfasdfasdfasdfasd",
            qty_purchased: 5,
          },
        ],
      };
      const { body, status, error } = await request(app)
        .post(registerPurchaseRouter)
        .send(failPurchased);

      expect(status).toBe(404);
      expect(error).toBeTruthy();
      expect(body).toMatchObject({
        message: "Produto de asdfasdfasdfasdfasd n??o foi encontrado no banco de dados",
      });
    });

    it("test Purchase registration endpoint failed bacause of missing deliveryDate", async () => {
      const failPurchased = { ...purchase, deliveryDate: null };
      const { body, status, error } = await request(app)
        .post(registerPurchaseRouter)
        .send(failPurchased);

      expect(status).toBe(422);
      expect(error).toBeTruthy();
      expect(body).toMatchObject({
        message: "deliveryDate deve ser uma data v??lida",
      });
    });

    it("test Purchase registration endpoint failed bacause of deliveryDate is inv??lid", async () => {
      const failPurchased = { ...purchase, deliveryDate: "02-10-2020" };
      const { body, status, error } = await request(app)
        .post(registerPurchaseRouter)
        .send(failPurchased);

      expect(status).toBe(422);
      expect(error).toBeTruthy();
      expect(body).toMatchObject({
        message: "deliveryDate deve ser uma data v??lida",
      });
    });
  });

  describe("Test entity Stock", () => {
    it("test endpoint getAll sucess", async () => {
      const { body, status, error } = await request(app).get(getAllStockRouter);

      expect(status).toBe(200);
      expect(body).toBeInstanceOf(Array);
      expect(body).toHaveLength(50);
      expect(error).toBeFalsy();
    });

    it("test endpoint update sucess", async () => {
      const productPurchased = { id: productInStock.id, qty_purchased: 100 };
      const response = {
        ...productInStock,
        qty_stock: productInStock.qty_stock - 100,
      };

      const { body, status, error } = await request(app)
        .patch(updateStockRouter)
        .send({ productsPurchased: [productPurchased] });

      expect(status).toBe(200);
      expect(body).toMatchObject([response]);
      expect(error).toBeFalsy();
    });

    it("test endpoint update fail bacause miss productsPurchased property", async () => {
      const { error, status, body } = await request(app)
        .patch(updateStockRouter)
        .send();

      expect(status).toBe(422);
      expect(error).toBeTruthy();
      expect(body).toMatchObject({
        message:
          "productsPurchased deve ser um array de objetos e productsPurchased ?? requerido",
      });
    });

    it("test endpoint update fail bacause productsPurchased property is not array", async () => {
      const { error, status, body } = await request(app)
        .patch(updateStockRouter)
        .send({ productsPurchased: false });

      expect(status).toBe(422);
      expect(error).toBeTruthy();
      expect(body).toMatchObject({
        message: "productsPurchased deve ser um array de objetos",
      });
    });

    it("test endpoint update fail bacause one object of product purchased  is not according", async () => {
      const { error, status, body } = await request(app)
        .patch(updateStockRouter)
        .send({ productsPurchased: [{ id: null, qty_purchased: null }] });

      expect(status).toBe(422);
      expect(error).toBeTruthy();
      expect(body).toMatchObject({
        message: "H?? um erro na lista de produtos comprados",
      });
    });

    it("test endpoint update fail bacause one product purchased not exists in database", async () => {
      const { error, status, body } = await request(app)
        .patch(updateStockRouter)
        .send({
          productsPurchased: [{ id: "asdnjlaksdflkasdm", qty_purchased: 10 }],
        });

      expect(status).toBe(404);
      expect(error).toBeTruthy();
      expect(body).toMatchObject({
        message: `Produto de asdnjlaksdflkasdm n??o foi encontrado no banco de dados`,
      });
    });

    it("test endpoint update fail bacause one product purchased quantity is invalid", async () => {
      const { error, status, body } = await request(app)
        .patch(updateStockRouter)
        .send({
          productsPurchased: [
            { id: "fcb35c21-ab15-49c3-847e-fe987409591b", qty_purchased: -10 },
          ],
        });

      expect(status).toBe(422);
      expect(error).toBeTruthy();
      expect(body).toMatchObject({
        message: "H?? um erro na lista de produtos comprados",
      });
    });
  });
});
