
export default function TaskField({handleSubmit, handleUserInput}) {

  return (
    <div>
      <form className='form-control' onSubmit={handleSubmit}>
        <label>Task</label>
        <input onChange={handleUserInput}/>
        <button type='submit' className='btn btn-block'>Save Task</button>
      </form>
    </div>
  )
}
