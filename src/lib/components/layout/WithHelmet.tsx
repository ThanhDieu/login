import { FC } from 'react';
import { Helmet } from 'react-helmet';

export interface HelmetMeta {
    title: string;
    description?: string;
}

function withHelmet<P = any>(
    { title, description = 'Default Taimi page description' }: HelmetMeta,
    Page: FC<P>
): FC<P> {
    const PageWithHelmet = (props: P) => (
        <>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <Page {...(props as any)} />
        </>
    );

    return PageWithHelmet;
}

export default withHelmet;
