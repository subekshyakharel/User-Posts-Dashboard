import { User } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    users: User[];
    searchTerm:string;
    apiIsLoading:boolean;
    apiError:string | null;
}

const initialState: UserState={
    users: [],
    searchTerm:'',
    apiIsLoading:false,
    apiError:null,
}

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        setUser: (state, action: PayloadAction<User[]>) =>{
            state.users = action.payload;
        },
        setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
        setUserLoading: (state, action: PayloadAction<boolean>) =>{
            state.apiIsLoading = action.payload;
        },
        setUserError: (state, action: PayloadAction<string | null>) =>{
            state.apiError = action.payload;
        }
    }
})

const {reducer, actions} = userSlice;
export const {setUser, setSearchTerm,setUserLoading, setUserError} = actions;
export default reducer;