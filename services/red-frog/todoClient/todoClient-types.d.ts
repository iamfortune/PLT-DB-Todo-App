export interface FullResponse<T, U extends number> {
  'statusCode': U;
  'headers': object;
  'body': T;
}

export type GetUserRequest = {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'createdAt' | 'id' | 'password' | 'username'>;
  'where.createdAt.eq'?: string;
  'where.createdAt.neq'?: string;
  'where.createdAt.gt'?: string;
  'where.createdAt.gte'?: string;
  'where.createdAt.lt'?: string;
  'where.createdAt.lte'?: string;
  'where.createdAt.like'?: string;
  'where.createdAt.in'?: string;
  'where.createdAt.nin'?: string;
  'where.createdAt.contains'?: string;
  'where.createdAt.contained'?: string;
  'where.createdAt.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.password.eq'?: string;
  'where.password.neq'?: string;
  'where.password.gt'?: string;
  'where.password.gte'?: string;
  'where.password.lt'?: string;
  'where.password.lte'?: string;
  'where.password.like'?: string;
  'where.password.in'?: string;
  'where.password.nin'?: string;
  'where.password.contains'?: string;
  'where.password.contained'?: string;
  'where.password.overlaps'?: string;
  'where.username.eq'?: string;
  'where.username.neq'?: string;
  'where.username.gt'?: string;
  'where.username.gte'?: string;
  'where.username.lt'?: string;
  'where.username.lte'?: string;
  'where.username.like'?: string;
  'where.username.in'?: string;
  'where.username.nin'?: string;
  'where.username.contains'?: string;
  'where.username.contained'?: string;
  'where.username.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.createdAt'?: 'asc' | 'desc';
  'orderby.id'?: 'asc' | 'desc';
  'orderby.password'?: 'asc' | 'desc';
  'orderby.username'?: 'asc' | 'desc';
}

export type GetUserResponseOK = Array<{ 'id'?: number | null; 'username'?: string | null; 'password'?: string | null; 'createdAt'?: string | null }>
export type GetUserResponses =
  GetUserResponseOK

export type CreateUserRequest = {
  'id'?: number;
  'username': string;
  'password': string;
  'createdAt'?: string | null;
}

export type CreateUserResponseOK = { 'id'?: number | null; 'username'?: string | null; 'password'?: string | null; 'createdAt'?: string | null }
export type CreateUserResponses =
  CreateUserResponseOK

export type UpdateUserRequest = {
  'fields'?: Array<'createdAt' | 'id' | 'password' | 'username'>;
  'where.createdAt.eq'?: string;
  'where.createdAt.neq'?: string;
  'where.createdAt.gt'?: string;
  'where.createdAt.gte'?: string;
  'where.createdAt.lt'?: string;
  'where.createdAt.lte'?: string;
  'where.createdAt.like'?: string;
  'where.createdAt.in'?: string;
  'where.createdAt.nin'?: string;
  'where.createdAt.contains'?: string;
  'where.createdAt.contained'?: string;
  'where.createdAt.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.password.eq'?: string;
  'where.password.neq'?: string;
  'where.password.gt'?: string;
  'where.password.gte'?: string;
  'where.password.lt'?: string;
  'where.password.lte'?: string;
  'where.password.like'?: string;
  'where.password.in'?: string;
  'where.password.nin'?: string;
  'where.password.contains'?: string;
  'where.password.contained'?: string;
  'where.password.overlaps'?: string;
  'where.username.eq'?: string;
  'where.username.neq'?: string;
  'where.username.gt'?: string;
  'where.username.gte'?: string;
  'where.username.lt'?: string;
  'where.username.lte'?: string;
  'where.username.like'?: string;
  'where.username.in'?: string;
  'where.username.nin'?: string;
  'where.username.contains'?: string;
  'where.username.contained'?: string;
  'where.username.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'username': string;
  'password': string;
  'createdAt'?: string | null;
}

export type UpdateUserResponseOK = Array<{ 'id'?: number | null; 'username'?: string | null; 'password'?: string | null; 'createdAt'?: string | null }>
export type UpdateUserResponses =
  UpdateUserResponseOK

export type GetUserByIdRequest = {
  'fields'?: Array<'createdAt' | 'id' | 'password' | 'username'>;
  'id': number;
}

export type GetUserByIdResponseOK = { 'id'?: number | null; 'username'?: string | null; 'password'?: string | null; 'createdAt'?: string | null }
export type GetUserByIdResponses =
  GetUserByIdResponseOK

export type PutUpdateUserRequest = {
  'fields'?: Array<'createdAt' | 'id' | 'password' | 'username'>;
  'id': number;
  'username': string;
  'password': string;
  'createdAt'?: string | null;
}

export type PutUpdateUserResponseOK = { 'id'?: number | null; 'username'?: string | null; 'password'?: string | null; 'createdAt'?: string | null }
export type PutUpdateUserResponses =
  PutUpdateUserResponseOK

export type DeleteUserRequest = {
  'fields'?: Array<'createdAt' | 'id' | 'password' | 'username'>;
  'id': number;
}

export type DeleteUserResponseOK = { 'id'?: number | null; 'username'?: string | null; 'password'?: string | null; 'createdAt'?: string | null }
export type DeleteUserResponses =
  DeleteUserResponseOK

export type GetTodoRequest = {
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'completed' | 'description' | 'dueDate' | 'id' | 'title' | 'userId'>;
  'where.completed.eq'?: string;
  'where.completed.neq'?: string;
  'where.completed.gt'?: string;
  'where.completed.gte'?: string;
  'where.completed.lt'?: string;
  'where.completed.lte'?: string;
  'where.completed.like'?: string;
  'where.completed.in'?: string;
  'where.completed.nin'?: string;
  'where.completed.contains'?: string;
  'where.completed.contained'?: string;
  'where.completed.overlaps'?: string;
  'where.description.eq'?: string;
  'where.description.neq'?: string;
  'where.description.gt'?: string;
  'where.description.gte'?: string;
  'where.description.lt'?: string;
  'where.description.lte'?: string;
  'where.description.like'?: string;
  'where.description.in'?: string;
  'where.description.nin'?: string;
  'where.description.contains'?: string;
  'where.description.contained'?: string;
  'where.description.overlaps'?: string;
  'where.dueDate.eq'?: string;
  'where.dueDate.neq'?: string;
  'where.dueDate.gt'?: string;
  'where.dueDate.gte'?: string;
  'where.dueDate.lt'?: string;
  'where.dueDate.lte'?: string;
  'where.dueDate.like'?: string;
  'where.dueDate.in'?: string;
  'where.dueDate.nin'?: string;
  'where.dueDate.contains'?: string;
  'where.dueDate.contained'?: string;
  'where.dueDate.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.title.eq'?: string;
  'where.title.neq'?: string;
  'where.title.gt'?: string;
  'where.title.gte'?: string;
  'where.title.lt'?: string;
  'where.title.lte'?: string;
  'where.title.like'?: string;
  'where.title.in'?: string;
  'where.title.nin'?: string;
  'where.title.contains'?: string;
  'where.title.contained'?: string;
  'where.title.overlaps'?: string;
  'where.userId.eq'?: number;
  'where.userId.neq'?: number;
  'where.userId.gt'?: number;
  'where.userId.gte'?: number;
  'where.userId.lt'?: number;
  'where.userId.lte'?: number;
  'where.userId.like'?: number;
  'where.userId.in'?: string;
  'where.userId.nin'?: string;
  'where.userId.contains'?: string;
  'where.userId.contained'?: string;
  'where.userId.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.completed'?: 'asc' | 'desc';
  'orderby.description'?: 'asc' | 'desc';
  'orderby.dueDate'?: 'asc' | 'desc';
  'orderby.id'?: 'asc' | 'desc';
  'orderby.title'?: 'asc' | 'desc';
  'orderby.userId'?: 'asc' | 'desc';
}

export type GetTodoResponseOK = Array<{ 'id'?: number | null; 'userId'?: number | null; 'title'?: string | null; 'description'?: string | null; 'dueDate'?: string | null; 'completed'?: string | null }>
export type GetTodoResponses =
  GetTodoResponseOK

export type CreateTodoRequest = {
  'id'?: number;
  'userId'?: number | null;
  'title': string;
  'description'?: string | null;
  'dueDate'?: string | null;
  'completed'?: string | null;
}

export type CreateTodoResponseOK = { 'id'?: number | null; 'userId'?: number | null; 'title'?: string | null; 'description'?: string | null; 'dueDate'?: string | null; 'completed'?: string | null }
export type CreateTodoResponses =
  CreateTodoResponseOK

export type UpdateTodoRequest = {
  'fields'?: Array<'completed' | 'description' | 'dueDate' | 'id' | 'title' | 'userId'>;
  'where.completed.eq'?: string;
  'where.completed.neq'?: string;
  'where.completed.gt'?: string;
  'where.completed.gte'?: string;
  'where.completed.lt'?: string;
  'where.completed.lte'?: string;
  'where.completed.like'?: string;
  'where.completed.in'?: string;
  'where.completed.nin'?: string;
  'where.completed.contains'?: string;
  'where.completed.contained'?: string;
  'where.completed.overlaps'?: string;
  'where.description.eq'?: string;
  'where.description.neq'?: string;
  'where.description.gt'?: string;
  'where.description.gte'?: string;
  'where.description.lt'?: string;
  'where.description.lte'?: string;
  'where.description.like'?: string;
  'where.description.in'?: string;
  'where.description.nin'?: string;
  'where.description.contains'?: string;
  'where.description.contained'?: string;
  'where.description.overlaps'?: string;
  'where.dueDate.eq'?: string;
  'where.dueDate.neq'?: string;
  'where.dueDate.gt'?: string;
  'where.dueDate.gte'?: string;
  'where.dueDate.lt'?: string;
  'where.dueDate.lte'?: string;
  'where.dueDate.like'?: string;
  'where.dueDate.in'?: string;
  'where.dueDate.nin'?: string;
  'where.dueDate.contains'?: string;
  'where.dueDate.contained'?: string;
  'where.dueDate.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.title.eq'?: string;
  'where.title.neq'?: string;
  'where.title.gt'?: string;
  'where.title.gte'?: string;
  'where.title.lt'?: string;
  'where.title.lte'?: string;
  'where.title.like'?: string;
  'where.title.in'?: string;
  'where.title.nin'?: string;
  'where.title.contains'?: string;
  'where.title.contained'?: string;
  'where.title.overlaps'?: string;
  'where.userId.eq'?: number;
  'where.userId.neq'?: number;
  'where.userId.gt'?: number;
  'where.userId.gte'?: number;
  'where.userId.lt'?: number;
  'where.userId.lte'?: number;
  'where.userId.like'?: number;
  'where.userId.in'?: string;
  'where.userId.nin'?: string;
  'where.userId.contains'?: string;
  'where.userId.contained'?: string;
  'where.userId.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'userId'?: number | null;
  'title': string;
  'description'?: string | null;
  'dueDate'?: string | null;
  'completed'?: string | null;
}

export type UpdateTodoResponseOK = Array<{ 'id'?: number | null; 'userId'?: number | null; 'title'?: string | null; 'description'?: string | null; 'dueDate'?: string | null; 'completed'?: string | null }>
export type UpdateTodoResponses =
  UpdateTodoResponseOK

export type GetTodoByIdRequest = {
  'fields'?: Array<'completed' | 'description' | 'dueDate' | 'id' | 'title' | 'userId'>;
  'id': number;
}

export type GetTodoByIdResponseOK = { 'id'?: number | null; 'userId'?: number | null; 'title'?: string | null; 'description'?: string | null; 'dueDate'?: string | null; 'completed'?: string | null }
export type GetTodoByIdResponses =
  GetTodoByIdResponseOK

export type PutUpdateTodoRequest = {
  'fields'?: Array<'completed' | 'description' | 'dueDate' | 'id' | 'title' | 'userId'>;
  'id': number;
  'userId'?: number | null;
  'title': string;
  'description'?: string | null;
  'dueDate'?: string | null;
  'completed'?: string | null;
}

export type PutUpdateTodoResponseOK = { 'id'?: number | null; 'userId'?: number | null; 'title'?: string | null; 'description'?: string | null; 'dueDate'?: string | null; 'completed'?: string | null }
export type PutUpdateTodoResponses =
  PutUpdateTodoResponseOK

export type DeleteTodoRequest = {
  'fields'?: Array<'completed' | 'description' | 'dueDate' | 'id' | 'title' | 'userId'>;
  'id': number;
}

export type DeleteTodoResponseOK = { 'id'?: number | null; 'userId'?: number | null; 'title'?: string | null; 'description'?: string | null; 'dueDate'?: string | null; 'completed'?: string | null }
export type DeleteTodoResponses =
  DeleteTodoResponseOK

export type GetExampleRequest = {
  unknown
}

export type GetExampleResponseOK = unknown
export type GetExampleResponses =
  FullResponse<GetExampleResponseOK, 200>

export type GetLoggingPluginRequest = {
  unknown
}

export type GetLoggingPluginResponseOK = unknown
export type GetLoggingPluginResponses =
  FullResponse<GetLoggingPluginResponseOK, 200>



export interface TodoClient {
  setBaseUrl(newUrl: string) : void;
  getUser(req?: GetUserRequest): Promise<GetUserResponses>;
  createUser(req?: CreateUserRequest): Promise<CreateUserResponses>;
  updateUser(req?: UpdateUserRequest): Promise<UpdateUserResponses>;
  getUserById(req?: GetUserByIdRequest): Promise<GetUserByIdResponses>;
  putUpdateUser(req?: PutUpdateUserRequest): Promise<PutUpdateUserResponses>;
  deleteUser(req?: DeleteUserRequest): Promise<DeleteUserResponses>;
  getTodo(req?: GetTodoRequest): Promise<GetTodoResponses>;
  createTodo(req?: CreateTodoRequest): Promise<CreateTodoResponses>;
  updateTodo(req?: UpdateTodoRequest): Promise<UpdateTodoResponses>;
  getTodoById(req?: GetTodoByIdRequest): Promise<GetTodoByIdResponses>;
  putUpdateTodo(req?: PutUpdateTodoRequest): Promise<PutUpdateTodoResponses>;
  deleteTodo(req?: DeleteTodoRequest): Promise<DeleteTodoResponses>;
  getExample(req?: GetExampleRequest): Promise<GetExampleResponses>;
  getLoggingPlugin(req?: GetLoggingPluginRequest): Promise<GetLoggingPluginResponses>;
}
type PlatformaticFrontendClient = Omit<TodoClient, 'setBaseUrl'>
export default function build(url: string): PlatformaticFrontendClient
