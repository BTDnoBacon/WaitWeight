import axios from 'axios';
import { MemberInfo, UnAuthorizedUser } from '@/types/member.type';
import { QueryFunctionContext } from '@tanstack/react-query';

// 로그인 기능 개발후 토큰자리
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ0ZXN0IiwiaWF0IjoxNjkwODYwMTg2LCJleHAiOjE2OTA5NDY1ODYsInN1YiI6InNzYWZ5MSJ9.6DVipd0vMIk70u_eAtqWi_LFJ5_OrFdf1agQoCvCbBA';

// BASEURL 자리
const BASEURL = 'http://i9a104.p.ssafy.io:8081/';

// 회원정보 리스트 불러오는 api
const getUserLists = async (): Promise<MemberInfo[]> => {
  const response = await axios.get<MemberInfo[]>(BASEURL + 'admin/users/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log('회원정보리스트 불러오기', response.data);
  return response.data;
};

// 미승인 회원 리스트 불러오는 api
const getUnAuthorizedUsers = async (): Promise<UnAuthorizedUser[]> => {
  const response = await axios.get<UnAuthorizedUser[]>(
    BASEURL + 'admin/unauthorized-users',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  console.log('미승인 회원 리스트 불러오기', response.data);
  return response.data;
};

// 디바이스 매칭 제거 api
const deleteDevice = async (id: string, device_code: string | null) => {
  const response = await axios.put(
    BASEURL + 'devices/',
    {
      device_code: device_code,
      id: id,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  console.log('디바이스 매칭 제거', response);
  return response.data;
};

const matchDevice = async (id: string, device_code: string | null) => {
  const response = await axios.put(
    BASEURL + 'devices/match/',
    {
      device_code: device_code,
      id: id,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
};

export { getUserLists, getUnAuthorizedUsers, deleteDevice, matchDevice };
