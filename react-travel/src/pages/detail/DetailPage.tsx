import React from 'react'
import { useParams } from 'react-router-dom'

type ParamsType = {
  touristRouteId:string
}

export const DetailPage = () => {
  const params = useParams<ParamsType>()
  return (
    <div>DetailPage: {params.touristRouteId}</div>
  )
}
