import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { UsersProps } from 'src/utils/interface';
import instances from 'src/utils/plugins/axios';

interface InitialStateType {
  listLoading: boolean;
  creating: boolean;
  deleteting: boolean;
  editing: boolean;
  assigning: boolean;
  getAssigning: boolean;
}

const initialState: InitialStateType = {
  listLoading: false,
  creating: false,
  deleteting: false,
  editing: false,
  assigning: false,
  getAssigning: false,
};

export const getNodes = createAsyncThunk('nodes/getNodes', async () => {
  const res = await instances.get('/nodes');
  return res.data;
});

export const getNode = createAsyncThunk('nodes/getNode', async (id: any) => {
  const res = await instances.get(`/node/${id}`);
  return res.data;
});

export const createNodes = createAsyncThunk('nodes/createNodes', async (req: any, { rejectWithValue }) => {
  try {
    const res = await instances.post('/node', req);
    return res.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const editNodes = createAsyncThunk('nodes/editNodes', async (req: any, { rejectWithValue }) => {
  try {
    const res = await instances.put(`/node/${req.id}`, {
      name: req.name,
      description: req.description,
    });
    return res.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const deleteNodes = createAsyncThunk('nodes/deleteNodes', async (id: any, { rejectWithValue }) => {
  try {
    const res = await instances.delete(`/node/${id}`);
    return res.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const assignNode = createAsyncThunk('nodes/assignNode', async (req: any, { rejectWithValue }) => {
  try {
    const res = await instances.post(`/node/${req.nodeId}/assign-users`, {
      assignCustomerIds: req.users,
    });
    return res.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getAssignedUsers = createAsyncThunk(
  'nodes/getAssignedUsers',
  async (nodeId: string, { rejectWithValue }) => {
    try {
      const res = await instances.get(`/node/${nodeId}/assign-users`);
      const list = res.data.data.map((u: UsersProps) => {
        return {
          name: u.firstName + ' ' + u.lastName,
          email: u.email,
          phone: u.phone,
          role: u.role,
          isDeleted: u.isDeleted,
          id: u.id,
          avatar: u.avatar,
        };
      });
      return list;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const nodeSlice = createSlice({
  name: 'nodes',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getNodes.pending, (state) => {
        state.listLoading = true;
      })
      .addCase(getNodes.fulfilled, (state) => {
        state.listLoading = false;
      })
      .addCase(getNodes.rejected, (state, action: any) => {
        state.listLoading = false;
        toast.error(action.error.message);
      })
      .addCase(createNodes.pending, (state) => {
        state.creating = true;
      })
      .addCase(createNodes.fulfilled, (state) => {
        state.creating = false;
        toast.success('Create successfully!');
      })
      .addCase(createNodes.rejected, (state, action: any) => {
        state.creating = false;
        toast.error(action.payload.response.data.detail);
      })
      .addCase(deleteNodes.pending, (state) => {
        state.deleteting = true;
      })
      .addCase(deleteNodes.fulfilled, (state) => {
        state.deleteting = false;
        toast.success('Delete successfully!');
      })
      .addCase(deleteNodes.rejected, (state, action: any) => {
        state.deleteting = false;
        toast.error(action.payload.response.data.detail);
      })
      .addCase(editNodes.pending, (state) => {
        state.editing = true;
      })
      .addCase(editNodes.fulfilled, (state) => {
        state.editing = false;
        toast.success('Update successfully!');
      })
      .addCase(editNodes.rejected, (state, action: any) => {
        state.editing = false;
        toast.error(action.payload.response.data.detail);
      })
      .addCase(assignNode.pending, (state) => {
        state.assigning = true;
      })
      .addCase(assignNode.fulfilled, (state) => {
        state.assigning = false;
        toast.success('Assigned successfully!');
      })
      .addCase(assignNode.rejected, (state, action: any) => {
        state.assigning = false;
        toast.error(action.payload.response.data.detail);
      })
      .addCase(getAssignedUsers.pending, (state) => {
        state.getAssigning = true;
      })
      .addCase(getAssignedUsers.fulfilled, (state) => {
        state.getAssigning = false;
      })
      .addCase(getAssignedUsers.rejected, (state, action: any) => {
        state.getAssigning = false;
        toast.error(action.payload.response.data.detail);
      });
  },
});
// export const { } = nodeSlice.actions;
export default nodeSlice.reducer;
