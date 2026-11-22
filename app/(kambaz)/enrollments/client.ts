import axios from "axios";
const http = axios.create({ withCredentials: true });
const USERS_API = `${process.env.NEXT_PUBLIC_HTTP_SERVER}/api/users`;
export const findMyEnrollments = async () => (await http.get(`${USERS_API}/current/enrollments`)).data;
export const enrollIntoCourse = async (courseId: string) => (await http.post(`${USERS_API}/current/courses/${courseId}`)).data;
export const unenrollFromCourse = async (courseId: string) => (await http.delete(`${USERS_API}/current/courses/${courseId}`)).data;
