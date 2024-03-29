// @ts-ignore
import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const shop = url.searchParams.get("shop");

  if (shop) {
    const response = await context.next();
    response.headers.set(
      "Content-Security-Policy",
      `frame-ancestors https://${shop} https://admin.shopify.com;`
    );
    return response;
  }
};

// export default async (req, context) => {
//   console.log(req);
//   const shop = req.query.shop;
//   if (shop) {
//     const response = await context.next();
//     response.headers.set(
//       "Content-Security-Policy",
//       `frame-ancestors https://${shop} https://admin.shopify.com;`
//     );
//     return response;
//   }
// };
