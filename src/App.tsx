import useTheme from './hooks/useTheme'
import UserTable from './pages/User'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className='min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white'>
      <header className='p-4 shadow-md bg-gray-100 dark:bg-gray-800'>
        <h1 className='text-lg'>Dark/Light Theme Example</h1>
        <button onClick={toggleTheme} className='mt-2 px-4 py-2 bg-blue-500 text-white rounded dark:bg-blue-700'>
          Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
      </header>
      <main className='p-4'>
        <p>This is a {theme === 'dark' ? 'Dark' : 'Light'} theme example.</p>
      </main>
      <UserTable />
    </div>
  )
}

export default App
