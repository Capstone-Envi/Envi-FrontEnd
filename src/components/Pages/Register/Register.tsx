
export default function Register() {
    return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-color-3-100 text-gray-700">
      <form className="flex flex-col bg-white rounded-xl shadow-2xl p-12 mt-12" action="">
    <h1 className=" flex font-bold text-2xl justify-center">Create an account</h1>
    
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 mt-5">
				<input className="flex items-center h-8 w-32 border-0 border-grey border-opacity-70 text-gray-900 mt-2 px-4 rounded-lg focus:outline-none focus:ring-2" type="text" placeholder="First Name" />
				<input className="flex items-center h-8 w-32 border-0 border-grey border-opacity-70 text-gray-900 mt-2 px-4 rounded-lg focus:outline-none focus:ring-2" type="text" placeholder="Last Name" />	
        </div>

        <input placeholder='Email' className="flex items-center h-8 px-4 w-65 border-0 border-grey border-opacity-70 mt-2 rounded-lg focus:outline-none focus:ring-2" type="text"/>
          
        <input placeholder='Password' className="flex items-center h-8 px-4 w-65 border-0 border-grey border-opacity-70 mt-2 rounded-lg focus:outline-none focus:ring-2"type="password"/>
      
        <input placeholder='Confirm Password' className="flex items-center h-8 px-4 w-65 border-0 border-grey border-opacity-70 mt-2 rounded-lg focus:outline-none focus:ring-2"type="password"/>
         
        <button className="flex items-center justify-center h-8 px-6 w-65 mt-8 bg-primary-500 rounded-lg font-semibold text-white text-sm hover:bg-primary-600">Login</button>
          
        <div className="flex mt-6 justify-center text-xs">
              <span className="mx-2 text-gray-300">Already have an account?</span>
              <a className=" text-t1 underline text-primary-400 hover:text-primary-500" href="#">Login</a>
        </div>
      </form>
  </div>
    )
  }
  