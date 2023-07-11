export interface TodoList {
    name: String,
    location: String,
    isDone: Boolean,
    _id: String
  }
 
export interface ResponseTodo{
  data: TodoList[]
}