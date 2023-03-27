import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Login Admin
export const LoginAdmin = createAsyncThunk("admin/LoginAdmin", async(admin, thunkAPI) => {
    try {
        const response = await axios.post('http://localhost:5000/loginadmin', {
            username: admin.username,
            password: admin.password
        });
        return response.data;   
    } catch (error) {
        if(error.response){
            const message = error.response.data.message;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

//Login Siswa
export const LoginSiswa = createAsyncThunk("admin/LoginSiswa", async(siswa, thunkAPI) => {
    try {
        const response = await axios.post('http://localhost:5000/loginsiswa', {
            nama: siswa.nama,
            nisn: siswa.nisn
        });
        return response.data;   
    } catch (error) {
        if(error.response){
            const message = error.response.data.message;
            return thunkAPI.rejectWithValue(message);
        }
    }
});


// Get Me Admin
export const getMeAdmin = createAsyncThunk("admin/getMeAdmin", async(_, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:5000/meadmin');
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.message;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

// Get Me Siswa
export const getMeSiswa = createAsyncThunk("admin/getMeSiswa", async(_, thunkAPI) => {
    try {
        const response = await axios.get('http://localhost:5000/mesiswa');
        return response.data;
    } catch (error) {
        if(error.response){
            const message = error.response.data.message;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const LogOutSiswa = createAsyncThunk("admin/LogOutSiswa", async() => {
    await axios.delete('http://localhost:5000/logoutsiswa');
});

export const LogOutAdmin = createAsyncThunk("admin/LogOutAdmin", async() => {
    await axios.delete('http://localhost:5000/logoutadmin');
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) => {
        // Login Admin
        builder.addCase(LoginAdmin.pending, (state) =>{
            state.isLoading = true;
        });
        builder.addCase(LoginAdmin.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(LoginAdmin.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // Login Siswa
        builder.addCase(LoginSiswa.pending, (state) =>{
            state.isLoading = true;
        });
        builder.addCase(LoginSiswa.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(LoginSiswa.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // Get Siswa Login
        builder.addCase(getMeSiswa.pending, (state) =>{
            state.isLoading = true;
        });
        builder.addCase(getMeSiswa.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(getMeSiswa.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // Get Admin Login
        builder.addCase(getMeAdmin.pending, (state) =>{
            state.isLoading = true;
        });
        builder.addCase(getMeAdmin.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        });
        builder.addCase(getMeAdmin.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

    }
})

export const {reset} = authSlice.actions;
export default authSlice.reducer;