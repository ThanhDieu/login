import axios, { AxiosError, AxiosResponse } from 'axios';
import { loadTenantId } from 'utils/storage';

const instance = axios.create({
    baseURL: `${import.meta.env.VITE_API_ENDPOINT}${import.meta.env.VITE_API_PREFIX}`,
    // timeout: 10000, // 10s timeout

});


instance.interceptors.request.use((config) => {
    const tenant: any = loadTenantId();
    if (tenant?.base && !tenant.base.includes(":3000") && !window.location.origin.includes(":3000")) {
        let newDomain = tenant.base
        if (newDomain.endsWith("/")) {
            newDomain = tenant.base.slice(0, -1);
        }
        config.baseURL = `${newDomain}${import.meta.env.VITE_API_PREFIX}`
    }
    return config;
});

instance.interceptors.response.use(
    (response: AxiosResponse<any>) => {

        return response

    },
    async (error: AxiosError<any>) => {

        return Promise.reject(error);
    },
);

export default instance;
