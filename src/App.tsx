import { Routes, Route } from 'react-router-dom'
import SigninForm from './_auth/forms/SigninForm'
import SingupForm from './_auth/forms/SingupForm'
import RootLayout from './_root/RootLayout'
import AuthLayout from './_auth/AuthLayout'
import { Home } from './_root/pages'
import './globals.css'

const App = () => {
  return (
    <main className="flex h-screen">
        <Routes>
            {/* Public Routes */}
            <Route element={<AuthLayout/>}>
                <Route path='/sign-in' element={<SigninForm/>}/>
                <Route path='/sign-up' element={<SingupForm/>}/>
            </Route>

            {/* Private Routes */}
            <Route element={<RootLayout/>}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    </main>
  )
}

export default App