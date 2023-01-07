interface ISideBar {

}
export const SideBar = ({ children }: React.PropsWithChildren<ISideBar>) => {
    return (
        <>{children}</>
    )
}