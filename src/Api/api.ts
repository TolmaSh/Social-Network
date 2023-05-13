import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '54a995e8-0f3d-4b8e-8429-66cab06331be'
    }
})

export const usersAPI = {
    getUsers(page: number = 1, count: string = '10') {
        return instance.get(`users?page=${page}&count=${count}`).then(response => response.data)
    },
}

export const followAPI = {
    followUser(id: string) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    unFollowUser(id: string) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
}

export const authAPI = {
    isAuth() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}

export const profileAPI = {
    getUserProfile(profileId: string = '2') {
        return instance.get(`profile/${profileId}`).then(response => response.data)
    }
}