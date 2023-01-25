export default async (req, context) => {
  console.log(req);
  // const shop = req.query.shop;
  // if (shop) {
  //   const response = await context.next();
  //   response.headers.set(
  //     "Content-Security-Policy",
  //     `frame-ancestors https://${shop} https://admin.shopify.com;`
  //   );
  //   return response;
  // }
};
