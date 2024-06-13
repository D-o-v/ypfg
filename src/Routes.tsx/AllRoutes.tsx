import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainBody from '../components/MainBody'
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
                </Route>
            </Routes>
        </Suspense>
    )
}

export default AllRoutes