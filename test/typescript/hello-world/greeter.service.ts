"use strict";

import { Service } from "../../../";
import { Context } from "../../../";

type GreeterWelcomeParams = {
	name: string
};

export default class GreeterService extends Service {
	constructor(broker) {
		super(broker);

		this.parseServiceSchema({
			name: "greeter",
			hooks: {
				before: {
					welcome(ctx: Context<GreeterWelcomeParams>) {
						ctx.params.name = ctx.params.name.toUpperCase();
					}
				}
			},
			actions: {
				hello: this.hello,
				welcome: this.welcome
			}
		});
	}

	/**
	 * Say a 'Hello'
	 *
	 * @returns
	 */
	hello() {
		return "Hello Moleculer TS";
	}

	/**
	 * Welcome a username
	 *
	 * @param {String} name - User name
	 */
	welcome(ctx: Context<GreeterWelcomeParams>) {
		return `Welcome, ${ctx.params.name}!`;
	}
};
