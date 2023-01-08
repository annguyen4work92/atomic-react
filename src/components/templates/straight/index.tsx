import { ContentWrapper } from "components/organisms/content"
import { Header } from "components/organisms/header"
import { SideBar } from "components/organisms/sidebar"
import { ITemplateBase } from "components/types"
import './style.scss';


interface IListUserTemplate extends ITemplateBase {
    templateHeader: React.ReactNode,
    templateSideBar: React.ReactNode,
    templateContent: React.ReactNode,

}

export const ListUserTemplate = (props: IListUserTemplate) => {
    const {templateContent, templateHeader, templateSideBar} = props;
    return (
        <div className="layout-wrapper">
            <div className="header-wrapper">{templateHeader}</div>
            <div className="sidbar-wrapper">{templateSideBar}</div>
            <div className="content-wrapper">{templateContent}</div>
        </div>
    )
}