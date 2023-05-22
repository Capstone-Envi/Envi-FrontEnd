

export default function Login() {
  return (
  <div className="flex flex-col items-center justify-center w-screen h-screen bg-color-3-100 text-gray-700">
	<form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" action="">
  <h1 className=" flex font-bold text-2xl justify-center">Login</h1>
  
		<input placeholder='Email' className="flex items-center h-8 px-4 w-64 border-0 border-grey border-opacity-70 mt-2 rounded focus:outline-none focus:ring-2" type="text"/>
		
    <input placeholder='Password' className="flex items-center h-8 px-4 w-64 border-0 border-grey border-opacity-70 mt-2 rounded focus:outline-none focus:ring-2"type="password"/>
		<a className=" flex justify-end text-t1 text-primary-400 hover:text-primary-500" href="#">Forgot Password?</a>
    <button className="flex items-center justify-center h-8 px-6 w-64 mt-8 bg-primary-500 rounded font-semibold text-white text-sm hover:bg-primary-600">Login</button>
		
    <div className="flex mt-6 justify-center text-xs">
			<span className="mx-2 text-gray-300">Don't have an account?</span>
			<a className=" text-t1 underline text-primary-400 hover:text-primary-500" href="#">Sign Up</a>
		</div>
	</form>
</div>
  )
}
