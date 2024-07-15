/// <reference path="../global.d.ts" />
"use strict";
/** @param {import('fastify').FastifyInstance} fastify */
module.exports = async function loggingPlugin(fastify, opts) {
  fastify.decorate("loggingPlugin", "foobar");

  fastify.addHook("onRequest", async (request, reply) => {
    console.log(`[REQUEST] ${request.method} ${request.url}`);
  });

  fastify.addHook("preHandler", async (request, reply) => {
    if (request.body) {
      console.log(`[BODY] ${JSON.stringify(request.body, null, 2)}`);
    }
  });

  fastify.addHook("onResponse", async (request, reply) => {
    console.log(
      `[RESPONSE] ${request.method} ${request.url} - ${reply.statusCode}`
    );
  });
};
