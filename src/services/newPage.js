import { stringify } from 'qs';
import request from '@/utils/request';

export async function queryUser(params) {
  return request(`/server//test/user?${stringify(params)}`);
}

export async function queryUser2(params) {
  return request(`/server/api//test/user?${params}`, {
    method: "POST"
  })
}