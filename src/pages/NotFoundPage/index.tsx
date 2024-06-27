import ErrorPage from "lib/components/shared/ErrorPage";

const NotFoundPage = () => {
    return <ErrorPage status="404" title="404" subTitle="Sorry, the page you visited does not exist." />
}

export default NotFoundPage;
