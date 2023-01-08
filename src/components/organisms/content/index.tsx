import DefaultContent from './default.component'

interface IFooterWrapper {}
const FooterWrapper: React.FC<IFooterWrapper> = (
  props: React.PropsWithChildren<IFooterWrapper>
) => {
  console.log(props)
  const { children } = props
  return <>{children || <DefaultContent />}</>
}
export default FooterWrapper
