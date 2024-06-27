import axios from 'api';
import { ILoginFormProps, IResetPasswordFormProps, IResetPasswordWithTokenProps, IUserType, ResponseType } from 'types';

class LoginService {
    private apis = {
        auth: {
            login: 'auth/tokens/login',
            register: 'auth/register',
            token: 'auth/token',
            passwords: 'auth/tokens/passwords',
        },
    };

    login(form: ILoginFormProps) {
        return axios.post<ResponseType<IUserType[]>>(this.apis.auth.login, form);
    }

    // register(form: RegisterFormProps) {
    //   return axios.post(this.apis.auth.register, form);
    // }


    resetForgotPassword(form: IResetPasswordFormProps) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return axios.put<ResponseType<string>>(this.apis.auth.passwords, form)
    }

    setNewPassword(form: IResetPasswordWithTokenProps) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return axios.post<ResponseType<string>>(this.apis.auth.passwords, form)
    }
}

export const loginService = new LoginService();
