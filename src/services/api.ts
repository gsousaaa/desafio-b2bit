import axios from "axios";

const baseURL = 'https://api.homologation.cliqdrive.com.br/auth'

export interface Credentials {
    email: string;
    password: string;
}

export interface ProfileData {
    id: number,
    name: string,
    email: string,
    is_active: boolean,
    avatar?: string | null,
    type: string,
    created: string,
    modified: string,
    role: string
}

axios.interceptors.request.use(
    (config) => {
       
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        if (response.config.url && response.config.url.includes(`${baseURL}/login/`)) {
            const access = response.data.tokens.access;
            localStorage.setItem('accessToken', access);
        }

        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const loginUser = async (userData: Credentials) => {
    try {
        let response = await axios.post(`${baseURL}/login/`, userData, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json;version=v1_web'
            }
        })

        return response.data
    } catch (e) {
        throw e;
    }
}

export const getProfile = async (): Promise<ProfileData> => {
    try {
        let accessToken = localStorage.getItem('accessToken')
        let response = await axios.get(`${baseURL}/profile`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json;version=v1_web',
                'Authorization': `Bearer ${accessToken}`
            }
        })

        return response.data
    } catch (e) {
        throw e;
    }
}

