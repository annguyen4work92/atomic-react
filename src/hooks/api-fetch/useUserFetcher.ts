import { EndPoint, getApiUrl } from 'configs'
import React from 'react'
import { useHttpProvider } from 'hooks/base'

export interface IUserType {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const useUserFetcher = () => {
  const [dataSource, setDataSource] = React.useState<IUserType[]>([])
  const { httpProvider } = useHttpProvider()

  React.useEffect(() => {
    let isCancelled = false
    const execute = async () => {
      console.log('Hahaa')
      const res = await httpProvider.get<IUserType[]>(
        getApiUrl(EndPoint.GetList)
      )
      if (!isCancelled) return
      setDataSource(res.data as IUserType[])
    }
    execute()
    return () => {
      isCancelled = true
    }
  }, [setDataSource])

  return {
    dataSource,
  }
}
