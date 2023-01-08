interface ISideBar {

}
const Footer = ({ children }: React.PropsWithChildren<ISideBar>) => {
    return (
        <>{children}</>
    )
}

export default Footer;