import TodoCard from '../todo/TodoCard'
const todoContainer = () => {
  return (
    <div>
      <div>
        <button>Add todo</button>
        <button>filter</button>
      </div>
      <div className="bg-red-500 w-full h-full rounded-xl p-5 space-y-3">
        <div className='w-full rounded-xl font-bold text-2xl bg-white p-5 '>
            <p className='text-center'>there is no task pending</p>
        </div>
        <TodoCard/>
        <TodoCard/>
        <TodoCard/>
        <TodoCard/>
        <TodoCard/>
        <TodoCard/>
      </div>
    </div>
  );
};

export default todoContainer;
