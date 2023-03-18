const navbar = document.querySelector('#navbar');

const createNavHome = () => {
    navbar.innerHTML = `
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
            <p class="font-bold text-xl text-white">TodoApp</p>

            <!-- Version movil -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10 md:hidden text-white cursor-pointer p-2 hover:bg-indigo-800 rounded-lg"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>
            
            <!-- Version escritorio -->
            <div class="hidden md:flex flex-row gap-4">
                <a href="/login/" class="transition ease-in-out text-white font-bold hover:bg-indigo-800 py-2 px-4 rounded-lg">Login</a>
                <a href="/registro/" class="transition ease-in-out text-black font-bold bg-slate-50 hover:bg-slate-300 py-2 px-4 rounded-lg">Registro</a>
            </div>

        </div>
    `;
}

if(window.location.pathname === '/') {
    createNavHome();
}
