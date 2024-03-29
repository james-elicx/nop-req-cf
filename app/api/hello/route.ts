// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  let responseText = `Hello, World!
  
  NextRequest IP: ${request.ip}
  NextRequest Geo: ${JSON.stringify(request.geo)}

  request.cf Object:
  ${JSON.stringify(request.cf, null, 2)}`;

  // In the edge runtime you can use Bindings that are available in your application
  // (for more details see:
  //    - https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#use-bindings-in-your-nextjs-application
  //    - https://developers.cloudflare.com/pages/functions/bindings/
  // )
  //
  // KV Example:
  // const myKv = process.env.MY_KV;
  // await myKv.put('suffix', ' from a KV store!');
  // const suffix = await myKv.get('suffix');
  // responseText += suffix;

  return new Response(responseText);
}
