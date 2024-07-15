/**
 * Todo
 * A Todo
 */
declare interface Todo {
    id?: number;
    completed?: string | null;
    description?: string | null;
    dueDate?: string | null;
    title: string;
    userId?: number | null;
}
export { Todo };
