import TodoCard from '../todo/TodoCard'
import { Button } from '../ui/button';
const todoContainer = () => {
  return (
    <div>
      <div className='flex justify-between items-center mb-5'>
        <Button className='bg-primary-gradient'>Add todo</Button>
        <button>filter</button>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
        {/* <div className='w-full rounded-xl font-bold text-2xl bg-white p-5 '>
            <p className='text-center'>there is no task pending</p>
        </div> */}
       <div className='bg-white p-5 space-y-3 '>
       <TodoCard/>
        <TodoCard/>
        <TodoCard/>
        <TodoCard/>
        <TodoCard/>
        <TodoCard/>
       </div>
      </div>
    </div>
  );
};

export default todoContainer;
