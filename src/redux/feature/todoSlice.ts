import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { todo } from "node:test";
import { fromTheme } from "tailwind-merge";

const  initialState:TInitialState ={
    todos:[]
};
type TTodo ={
    id:string,
    title: string,
    description: string,
    isCompleted?: boolean,
    priority:string
}

type TInitialState ={
    todos : TTodo[]
}
const todoSlice = createSlice({
    name : "todo",
    initialState,
    reducers:{
        addTodo:(state, action:PayloadAction<TTodo>)=>{

            state.todos.push({...action.payload, isCompleted : false})

        },
        removeTodo:(state, action)=>{
         state.todos=   state.todos.filter(todo=> todo.id !== action.payload)

        },
        toggleIsComplete:(state, action)=>{
            const findingTask= state.todos.find(task=> task.id === action.payload)        
            findingTask!.isCompleted =!findingTask?.isCompleted;
            const resetState= state.todos.filter(todo=> todo.id !== action.payload)
            resetState.push(findingTask)
            state.todos= resetState
        },
        todoFilterByPriotrity:(state, action)=>{
           
            const filterByQuery = state.todos.filter(todo=> todo.priority === action.payload)
            const restOfTodo= state.todos.filter(todo=> todo.priority !== action.payload)
            const resetState= [...filterByQuery ,...restOfTodo]
            // console.log(filterByQuery,action, "worikign");
            // console.log(state.todos);
            state.todos= resetState

        },
        updateTodoDetails:(state, action)=>{
            console.log(action);
            const findingForUpdate= state.todos.find(todo=> todo.id === action.payload.id)
            findingForUpdate!.title= action.payload.title
            findingForUpdate!.description= action.payload.description
            findingForUpdate!.priority= action.payload. UpdatePriority


        }
    },
})

export  const {addTodo, removeTodo,toggleIsComplete , todoFilterByPriotrity,updateTodoDetails }= todoSlice.actions

export default todoSlice.reducer