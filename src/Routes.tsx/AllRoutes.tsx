import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainBody from '../components/MainBody'
import Blogs from '../pages/Blogs'
import Courses from '../pages/Courses'
import Community from '../pages/Community'
import Resources from '../pages/Resources'
const LandingPage = lazy(() => import('../pages/Landing'))

const AllRoutes = () => {
    return (
        <Suspense fallback={
            <div className="flex justify-center items-center w-full h-screen">
                <span className="loading loading-ring loading-xs"></span>
                <span className="loading loading-ring loading-sm"></span>
                <span className="loading loading-ring loading-md"></span>
                <span className="loading loading-ring loading-lg"></span>
            </div>
        }
        >
            <Routes>
                <Route path='/' element={<MainBody />}>
                    <Route index element={<LandingPage />} />
                    <Route path='/blogs' element={<Blogs/>}/>
                    <Route path='/courses' element={<Courses/>}/>
                    <Route path='/resources' element={<Resources/>}/>
                    <Route path='/community' element={<Community/>}/>
                </Route>
            </Routes>
        </Suspense>
    )
}

export default AllRoutes