import type { NextRequest as OriginalNextRequest } from 'next/server';
import 'next/server';

declare module 'next/server' {
  class NextRequest extends OriginalNextRequest {
    cf: IncomingRequestCfProperties;
  }
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Add here the Cloudflare Bindings you want to have available in your application
      // (for more details on Bindings see: https://developers.cloudflare.com/pages/functions/bindings/)
      //
      // KV Example:
      // MY_KV: KVNamespace
    }
  }
}

export {};
