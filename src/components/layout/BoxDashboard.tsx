
import { useEffect, useState } from "react"
import { getProfile, ProfileData } from "../../services/api"
import { Field } from "../common/Field"
import { Loading } from "../common/Loading";

export const BoxDashboard = () => {
    const [profileData, setProfileData] = useState<ProfileData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let data = await getProfile()
                setProfileData(data)
                setLoading(false)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()
    }, [])

    if (loading) {
        return <Loading />
    }


    return (
        <div className="bg-white px-16 py-10 rounded-3xl shadow-2xl">
            <div className="flex flex-col items-center pb-5">
                <p className="pb-1">Profile Picture</p>
                {profileData &&
                    (profileData.avatar ? (<img className="rounded-xl w-16 h-14"
                        src={profileData.avatar.medium} />) : (<img className="rounded-xl border-2 border-inherit border-solid w-16 h-14" src="/images/default.jpg" />))
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

