import { useAppSelector } from '@/redux/hooks';
import TodoCard from '../todo/TodoCard'
import { Button } from '../ui/button';
import AddTodoModal from './AddTodoModal';
import TodoFilter from './TodoFilter';
const todoContainer = () => {

  const {todos}= useAppSelector(state=>state.todos)
  return (
    <div>
      <div className='flex justify-between items-center mb-5'>
       
        <AddTodoModal/>
        <TodoFilter></TodoFilter>
        
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
        {/* <div className='w-full rounded-xl font-bold text-2xl bg-white p-5 '>
            <p className='text-center'>there is no task pending</p>
        </div> */}
       <div className='bg-white p-5 space-y-3 '>
      {
        todos.map(todo=> <TodoCard todo={todo}></TodoCard>)
      }
       </div>
      </div>
    </div>
  );
};

export default todoContainer;
