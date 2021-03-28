import HTTPREQUEST from '../service-base/http-methods'
import {
  DashbordInfoParams,
  ChartInfoParams,
  SqlQuery,
  ChartDataParams,
  TilesDataParams
} from './interface'

export const dashbordInfo = ( getData: DashbordInfoParams ) => {
  return HTTPREQUEST.get('/datavisual/dashbord_info', getData)
}

export const chartInfo = ( listChartData: ChartInfoParams ) => {
  return HTTPREQUEST.get(`/chart/${listChartData.dataId}`, {token: listChartData.token})
}

export const sqlQuery = ( sqlQueryData: SqlQuery ) => {
  return HTTPREQUEST.post(`/worktable/data_query/sql_query?dataId=${sqlQueryData.dataId}&token=${sqlQueryData.token}`, {sql: sqlQueryData.sql}, 'application/json')
}

export const chartData = ( data: ChartDataParams ) => {
  return HTTPREQUEST.post(`/worktable/data_query/field_query?dataId=${data.dataId}&token=${data.token}`, data.drag_options, 'application/json')
}

export const mapboxTiles = ( tilesData: TilesDataParams ) => {
  return HTTPREQUEST.get(`/worktable/{z}/{x}/{y}.mvt`, tilesData)
}