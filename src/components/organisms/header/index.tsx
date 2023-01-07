interface IHeader {

}
export const Header = ({ children }: React.PropsWithChildren<IHeader>) => {
    return (
        <>{children}</>
    )
}