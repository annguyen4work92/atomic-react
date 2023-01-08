import { ContentWrapper } from "components/organisms/content";
import StandardTemplate from "components/templates/standard";
import { useUserFetcher } from "hooks/api-fetch/useUserFetcher";
import React from "react";

interface IListUserPage {

}

const ListUserPage: React.FC<IListUserPage> = () => {
    const {dataSource} = useUserFetcher();
    console.log(dataSource);

    const memoContent = React.useMemo(() => (
        <ContentWrapper>
            {'Here is the content overrided'}
        </ContentWrapper>
    ), []);
    return (
        <StandardTemplate templateContent={memoContent} templateFooter={<></>} templateHeader={<></>} templateSideBar={<></>} />
    )
}

export default ListUserPage;