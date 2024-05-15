import axios, { AxiosInstance } from "axios";

const baseURL = 'https://api.homologation.cliqdrive.com.br/auth'

export interface Credentials {
    email: string;
    password: string;
}

const setupAxiosInterceptors = (instance: AxiosInstance) => {
    instance.interceptors.request.use(
        (config) => {
            const accessToken = localStorage.getItem('accessToken');

            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        (response) => {
            if (response.config.url === `${baseURL}/login/`) {
                
                const access = response.data.tokens.access;
                localStorage.setItem('accessToken', access);

            }

            return response;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
};

const axiosInstance = axios.create({
    baseURL: baseURL
});

setupAxiosInterceptors(axiosInstance)

export const loginUser =  async(userData: Credentials) => {
    try {
        let response = await axios.post(`${baseURL}/login/`, userData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json;version=v1_web'
                }
            
        })
        console.log(response.data)
        return response.data
    } catch(e) {
        console.log(e)
    }
}



