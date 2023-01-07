import { ContentWrapper } from "components/organisms/content"
import { Header } from "components/organisms/header"
import { SideBar } from "components/organisms/sidebar"
import { ITemplateBase } from "components/types"
import './style.scss';


interface IListUserTemplate extends ITemplateBase {

}

export const ListUserTemplate = ({ dataSource }: IListUserTemplate) => {
    return (
        <>
            <div className="Wrapper">
            <Header>
                <div className="WrapperHeader">
                    <div className="Header__logo"></div>
                    <div className="Header__menu"></div>
                </div>
            </Header>
            <SideBar>
                <div className="MenuBar">
                    <div className="MenuItem">
                    </div>
                </div>
            </SideBar>
            <ContentWrapper>
                {dataSource.map((item: any) => item.title)}
            </ContentWrapper>
            </div>
        </>
    )
}