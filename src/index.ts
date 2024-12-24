import { Server } from './server';

class Launcher {
	#server;
	constructor() {
		this.#server = new Server();
	}

	startServer() {
		this.#server.start();
	}

	async stopServer() {
		await this.#server.stop();
	}
}

new Launcher().startServer();
