import { RolePageParams, RolePageListGetResultModel } from '../blog/model/contentModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  RolePageList = '/blog/content/list',
}

export const getRoleListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.RolePageList, params });
