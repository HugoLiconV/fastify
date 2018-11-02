'use strict'

const keys = {
  kChildren: Symbol('fastify.children'),
  kBodyLimit: Symbol('fastify.bodyLimit'),
  kRoutePrefix: Symbol('fastify.routePrefix'),
  kLogLevel: Symbol('fastify.logLevel'),
  kHooks: Symbol('fastify.hooks'),
  kSchemas: Symbol('fastify.schemas'),
  kContentTypeParser: Symbol('fastify.contentTypeParser'),
  kReply: Symbol('fastify.Reply'),
  kRequest: Symbol('fastify.Request'),
  kMiddlewares: Symbol('fastify.middlewares'),
  kCanSetNotFoundHandler: Symbol('fastify.canSetNotFoundHandler'),
  kFourOhFourLevelInstance: Symbol('fastify.404LogLevelInstance'),
  kFourOhFourContext: Symbol('fastify.404ContextKey'),
  kReplySerializer: Symbol('reply.Serializer'),
  kReplyIsError: Symbol('reply.isError'),
  kReplyHeaders: Symbol('reply.headers'),
  kReplyHasStatusCode: Symbol('reply.hasStatusCode'),
  kReplyStartTime: Symbol('reply.errorHandlerCalled')
}

module.exports = keys
