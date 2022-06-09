import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/login_and_signup/Login'

const Router = ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router;