import { Button } from '../../components/common/Button'
import { BoxDashboard } from '../../components/layout/BoxDashboard'

const Dashboard = () => {
    return(
        <section >
            <div className='pt-3 flex justify-end pr-10 pb-3'> 
                <Button type='button'>Logout</Button>
            </div>

        <div className="flex w-full h-screen" >
            <div className="bg-gray-100 w-full flex items-center justify-center">
                    <BoxDashboard/>
            </div>
        </div>
    </section>
    )
}


export default Dashboard