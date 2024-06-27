import { paths } from "config";
import { useEffect } from "react";
import useLoginStore from "store";
import { getQueryParams } from "utils";
import { loadTenantId, saveTenantId } from "utils/storage";

interface ITenantProviderProps {
    children?: React.ReactNode
}
const TenantProvider = ({ children }: ITenantProviderProps) => {
    const setTenant = useLoginStore(state => state.setTenant)
    const tenant = loadTenantId()
    const getTenant = getQueryParams()

    useEffect(() => {
        if (window.location.pathname !== paths.login && !tenant) {
            window.location.assign(paths.login)
        }
    }, [])

    useEffect(() => {
        let info;
        if (getTenant?.id && getTenant?.name && getTenant?.base) {
            const { name, ...restGetTenant } = getTenant
            info = { ...restGetTenant, tenant_name: name }
            saveTenantId(info as any)
        } else if (tenant?.id && tenant?.tenant_name && tenant?.base) {
            info = { ...tenant }
        }
        setTenant(info)

    }, [tenant, getTenant])

    return children
};

export default TenantProvider;