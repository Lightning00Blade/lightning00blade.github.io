import type { ServerResponse, IncomingMessage } from 'http';

type ServerMiddleware = (req: IncomingMessage, res: ServerResponse, next: (Error?) => any) => unknown;

type ServerRequest = (req: IncomingMessage, res: ServerResponse) => Promise<any>;
