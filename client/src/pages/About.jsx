function About() {
    return (
        <div className={"m-4"}>
            <div>
                <h1>About Quick Space</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
            <div className={"text-white"}>
                <h1>Contact Us</h1>
                <div className={"my-2"}>
                    <label htmlFor="email" className="block text-sm font-medium leading-6">
                        Email
                    </label>
                    <div className="mt-2">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="bg-white block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                            placeholder="you@example.com"
                        />
                    </div>
                </div>
                <div className={"my-2"}>
                    <label htmlFor="comment" className="block text-sm font-medium leading-6">
                        Message Box
                    </label>
                    <div className="mt-2">
                        <textarea
                            rows={4}
                            name="comment"
                            id="comment"
                            className="bg-white block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                            defaultValue={''}
                        />
                    </div>
                </div>
                <button
                    type="button"
                    className="rounded-md bg-sky-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default About;