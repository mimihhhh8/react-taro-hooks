export interface DashbordInfoParams {
  /**
   * @description 获取仪表盘信息
   * @param {string} token token
   * @param {string} dataId 仪表盘id
   * @param {number} type 文件类型 1 2 3 4
   */
  token: string,
  dataId: string,
  type: string
}

export interface ChartInfoParams {
  /**
   * @description 获取图表
   * @param {string} token token
   * @param {string} dataId 图表的data_id
   */
  token: string,
  dataId: string
}

export interface SqlQuery {
  /**
   * @description 高级查询工作表数据
   * @param {string} token token
   * @param {string} dataId 查询工作表id
   * @param {string} sql 查询sql
   */
  token: string,
  dataId: string,
  sql: string
}

export interface ChartDataParams {
  /**
   * @description 选择字段配置方式获取数据-渲染图表
   * @param {string} dataId 工作表id
   * @param {string} token token
   * @param {object} drag_options 字段值
   */
  token: string,
  dataId: string,
  drag_options: object
}

export interface TilesDataParams {
  /**
   * @description 地图图层
   * @param {string} dataId 工作表id
   * @param {string} column geom
   * @param {string} token token
   */
  token: string
}