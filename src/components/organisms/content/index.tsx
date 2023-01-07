interface IContentWrapper {

}
export const ContentWrapper = ({ children }: React.PropsWithChildren<IContentWrapper>) => {
    return (
        <>{children}</>
    )
}