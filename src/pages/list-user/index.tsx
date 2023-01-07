import { ListUserTemplate } from "components/templates/standard";
import { useUserFetcher } from "hooks/api-fetch/useUserFetcher";
import React from "react";

interface IListUserPage {

}

const ListUserPage: React.FC<IListUserPage> = () => {
    const {dataSource} = useUserFetcher();
    console.log(dataSource);

    return (
        <ListUserTemplate dataSource={[dataSource]} />
    )
}

export default ListUserPage;