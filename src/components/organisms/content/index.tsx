import DefaultContent from "./default.component";

interface IContentWrapper {

}
export const ContentWrapper: React.FC<IContentWrapper> = (props: React.PropsWithChildren<IContentWrapper>) => {
    console.log(props);
    const { children } = props;
    return (
        <>{children || <DefaultContent/>}</>
    )
}