import http from 'http';
import express, { Request, Response } from 'express';

export class Server {
	#server: http.Server;
	#expressApp = express();
	#port = process.env.PORT || '3100';
	constructor() {
		this.#server = http.createServer(this.#expressApp);
	}

	#setupExpressMiddlewares() {
		this.#expressApp.get('/', (req: Request, res: Response) => {
			res.send('Express + typescript server!');
		});
	}
	start() {
		this.#setupExpressMiddlewares();
		this.#server.listen(Number(this.#port), () => {
			console.log(`This server is started and listening on ${this.#port}`);
		});
	}

	async stop() {
		if (this.#server) {
			console.log('closing server');
			return new Promise<void>((resolve, reject) => {
				this.#server.close((err) => {
					if (err) {
						reject(err);
					} else {
						console.log('server closed');
						resolve();
					}
				});
			});
		}
	}
}
