
import { useEffect, useState } from "react"
import { getProfile, ProfileData } from "../../services/api"
import { Field } from "../common/Field"



export const BoxDashboard = () => {
    const [profileData, setProfileData] = useState<ProfileData | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data = await getProfile()
                setProfileData(data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()
    }, []) 


    return (
        <div className="bg-white px-10 py-10 rounded-3xl shadow-2xl">
            <div className="flex flex-col items-center pb-5">
                <p>Profile Picture</p>
                {profileData &&
                    (profileData.avatar ? (<img width="60px" src={profileData.avatar}/>) : (<img width="60px" src="/images/default.jpg" />))
                }
            </div>

            <div>
                {profileData && (
                    <Field type="text" nameTitle='Name' value={profileData.name} />
                )
                }
            </div>

            <div className="pt-3">
                {profileData && (
                    <Field type="text" nameTitle='Email' value={profileData.email} />
                )}
            </div>
        </div>
    )
}
