import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../../utils/api';
import { PaginatedResponse, User } from '../../../utils/types';

export const getUsers = createAsyncThunk(
    'users',
    async ({ offset, limit, token }: { offset: number, limit: number, token: string | undefined }) => {
        try {
            const response = await api.get<PaginatedResponse<User>>('/api/users', {
                params: {
                    offset: offset,
                    limit: limit,
                },
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            throw new Error((error as any).response.data.detail);
        }
    });

export const activation = createAsyncThunk(
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