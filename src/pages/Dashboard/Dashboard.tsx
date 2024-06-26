import { Button } from '../../components/common/Button'
import { BoxDashboard } from '../../components/layout/BoxDashboard'
import { useNavigate } from 'react-router-dom'

const DashboardPage = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        try {
            const token = localStorage.getItem('accessToken')
            if (token) {
                localStorage.removeItem('accessToken')
                navigate('/')
            }

        } catch (e) {
            console.log("Erro ao fazer logout")
        }
    }

    return (
        <section>
            <div className='pt-3 flex justify-end pr-10 pb-3'>
                <Button onClick={handleLogout} type='button'>Logout</Button>
            </div>

            <div className='h-screen bg-gray-100'>
                <div className="w-full pt-20 flex items-center justify-center">
                    <BoxDashboard />
                </div>
            </div>
        </section>
    )
}


export default DashboardPage