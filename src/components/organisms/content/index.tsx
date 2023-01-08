import DefaultContent from "./default.component";

interface IContentWrapper {

}
const ContentWrapper: React.FC<IContentWrapper> = (props: React.PropsWithChildren<IContentWrapper>) => {
    console.log(props);
    const { children } = props;
    return (
        <>{children || <DefaultContent/>}</>
    )
}
export default ContentWrapper;