// store.ts

import { loginService } from 'lib/services/login.service';
import { ILoginFormProps, IResetPasswordFormProps, IResetPasswordWithTokenProps, ITenantType, IUserType } from 'types';
import { fitResponseModel } from 'utils/fitResponseModel';
import { create } from 'zustand';


type State = {
    user: IUserType | null;
    tenant: ITenantType | null;
    loading: boolean;
    error: string | null;
    login: (form: ILoginFormProps) => Promise<IUserType | null>;
    setTenant: (value?: ITenantType) => void;
    resetPassword: (value: IResetPasswordFormProps) => Promise<any>;
    setNewPassword: (value: IResetPasswordWithTokenProps) => Promise<any>;
};

const useLoginStore = create<State>((set) => ({
    user: null,
    tenant: null,

    loading: false,
    error: null,
    setTenant: (value) => {
        set({ tenant: value });
    },
    login: async (form) => {
        set({ loading: true, error: null });
        try {
            const response = await loginService.login(form);
            const responseData = response?.data;

            if (responseData?.data?.length > 0) {
                const newResponse = fitResponseModel<IUserType>(responseData.data[0], ['roles']);
                set({ user: newResponse, loading: false, error: responseData.errors || null });
                return newResponse;
            }

            set({ user: null, loading: false, error: responseData?.errors || null });
            return null;

        } catch (error: any) {
            set({ error: "Something went wrong", loading: false });
            return null;
        }

    },
    resetPassword: async (form) => {
        set({ loading: true, error: null });
        try {
            const response = await loginService.resetForgotPassword(form);
            set({ loading: false, error: response?.data?.errors || null });
            return response?.data || null

        } catch (error: any) {
            set({ error: "Something went wrong", loading: false });
            return null
        }
    },
    setNewPassword: async (form) => {
        set({ loading: true, error: null });
        try {
            const response = await loginService.setNewPassword(form);
            set({ loading: false, error: response?.data?.errors || null });
            return response?.data || null

        } catch (error: any) {
            set({ error: "Something went wrong", loading: false });
            return null
        }
    }


}));

export default useLoginStore;
