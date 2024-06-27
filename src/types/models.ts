export interface ITenantType {
    tenant_name: string;
    id: string;
    base?: string

}
export interface ILoginFormProps extends ITenantType {
    username: string;
    password: string;
}

export interface IResetPasswordFormProps {
    tenant_name: string;
    email: string;
    token?: string;
}

export interface IResetPasswordWithTokenProps {
    tenant_name: string;
    password: string;
    token: string;
}
export interface IUserType {
    tenant_name: string;
    password: string;
    token: string;
}
