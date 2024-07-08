import type { NextApiRequest, NextApiResponse } from "next";
import { generateFakeClient } from "@/src/utils/customerGenerate";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { products } = req.body;
  const headers = new Headers();
  headers.set(
    "Authorization",
    "Basic " +
      btoa("mR84ZAVArDdPscf" + ":" + "bVI4NFpBVkFyRGRQc2NmOjoxNzE5NTEyNTgwMA==")
  );
  headers.set("scope", "invoice.write,customer.write,webhook.write");

  const response: any = await fetch("https://api.tryplopay.com/auth", {
    method: "GET",
    headers: headers,
  }).then((res) => {
    return res.json();
  });
  const customerBody: any = generateFakeClient();

  const customer: any = await fetch("https://api.tryplopay.com/costumers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${response.access_token}`,
      AccessToken: response.access_token,
    },
    body: JSON.stringify(customerBody),
  }).then((res) => {
    return res.json();
  });

  fetch(`https://api.tryplopay.com/invoices`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${response.access_token}`,
      AccessToken: response.access_token,
    },
    body: JSON.stringify({
      client: customer.customers,
      payment: {
        id: Math.random().toString(36).substring(7),
        type: "3",
        due_at: "2024-12-28",
        installment: "1",
        order_url: "https://sualoja.com/pedido/123456",
        store_url: "https://sualoja.com",
        webhook: "https://sualoja.com/webhook",
        discount: 0,
        products: products,
      },
    }),
  })
    .then(async (response) => {
      const data = await response.json();
      console.log(data);
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({ message: "Internal Server Error" });
    });
}
