import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Landing from './components/layout/Landing'
import Auth from './views/Auth'
import AuthContextProvider from './contexts/AuthContext'
import Dashboard from './views/Dashboard'
import About from './views/About'
import ProtectedRoute from './components/routing/ProtectedRoute'
import PostContextProvider from './contexts/PostContext'
import NirLayout from './components/nir/NirLayout'
import NirUpload from './components/nir/NirUpload'
import Covid from './components/covid/Covid'
import Weather from './components/weather/Weather'
import Test1 from './components/test1/Test1'
import Test2 from './components/test2/Test2'




function App() {
    return (
        <AuthContextProvider>
            <PostContextProvider>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/login' render={props => <Auth {...props} authRoute='login' />} />
                        <Route exact path='/register' render={props => <Auth {...props} authRoute='register' />} />
                        <ProtectedRoute exact path='/nir' component={NirLayout} />
                        <ProtectedRoute exact path='/upload' component={NirUpload} />
                        <ProtectedRoute exact path='/about' component={About} />
                        <ProtectedRoute exact path='/dashboard' component={Dashboard} />
                        <ProtectedRoute exact path='/covid' component={Covid} />
                        <ProtectedRoute exact path='/test1' component={Test1} />
                        <ProtectedRoute exact path='/test2' component={Test2} />
                        <ProtectedRoute exact path='/weather' component={Weather} />
                    </Switch>
                </Router>
            </PostContextProvider>
        </AuthContextProvider>
    )
}
export default App