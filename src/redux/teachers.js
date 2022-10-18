import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: {
    teacher: {
      name: "teacher 1",
      group: ["JS1"],
      password: "12345",
      schedule: [
        {
          date: "2022-10-13",
          title: "React",
        },
        {
          date: "2022-10-14",
          title: "React",
        },
      ],
    },
  },
  currentUser: {
    isAuth: false,
    currentUserName: undefined,
  },
};

export const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    signInTeacher: (state, { payload }) => {
      const userList = state.userList;
      const { username, password } = payload;
      if (!userList[username]) {
        console.log("net");
        return;
      }
      if (userList[username].password === password) {
        console.log("da");
        state.currentUser.isAuth = true;
        state.currentUser.currentUserName = username;
      }
    },
    cookieAuthTeacher: (state, { payload }) => {
      state.currentUser.isAuth = true;
      state.currentUser.currentUserName = payload;
    },
  },
});

export const { signInTeacher, cookieAuthTeacher } = teachersSlice.actions;

export default teachersSlice.reducer;
