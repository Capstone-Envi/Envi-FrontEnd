import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../utils/api';
import { User } from '../../../utils/types';

export const login = createAsyncThunk(
    'user/login',
    async (requestBody: { email: string, password: string }) => {
        try {
            const response = await api.post<User>('/api/users/login', requestBody);
            return response.data;
        } catch (error) {
            throw new Error((error as any).response.data.detail);
        }
    });

export const register = createAsyncThunk(
    'user/register',
    async (requestBody: { email: string, password: string, firstName: string, lastName: string }) => {
        try {
            const response = await api.post<User>('/api/users/register', requestBody);
            return response.data;
        } catch (error) {
            throw new Error((error as any).response.data.detail);
        }
    }
);