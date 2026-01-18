import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform,
  ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { fastifySwagger } from '@fastify/swagger'
import { fastifyCors } from '@fastify/cors'
import ScalarApiReferences from '@scalar/fastify-api-reference'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifyCors, {
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS']
})

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Challenge With IA',
      description: 'API for capturigin and inspecting webhook requests',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(ScalarApiReferences, {
  routePrefix: '/docs'
})

app.listen({ port: 3333, host: '0.0.0.0' }).then(() => {
  console.log('🚀 HTPP server running on http://localhost:3333')
  console.log('📚 Docs available at http://localhost:3333/docs')
})
