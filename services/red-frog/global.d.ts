import type { PlatformaticApp, PlatformaticDBMixin, PlatformaticDBConfig, Entity, Entities, EntityHooks } from '@platformatic/db'
import { EntityTypes, Todo,User } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'Todo' | 'User'>(schemaId: T): {
      '$id': string,
      title: string,
      description: string,
      type: string,
      properties: {
        [x in keyof EntityTypes[T]]: { type: string, nullable?: boolean }
      },
      required: string[]
    };
  }
}

interface AppEntities extends Entities {
  todo: Entity<Todo>,
    user: Entity<User>,
}

interface AppEntityHooks {
  addEntityHooks(entityName: 'todo', hooks: EntityHooks<Todo>): any
    addEntityHooks(entityName: 'user', hooks: EntityHooks<User>): any
}

declare module 'fastify' {
  interface FastifyInstance {
    platformatic: PlatformaticApp<PlatformaticDBConfig> &
      PlatformaticDBMixin<AppEntities> &
      AppEntityHooks
  }
}
