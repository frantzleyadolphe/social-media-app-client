import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },

    //Elle prend en paramètre un état et une action.
    //Elle met à jour les propriétés user et token de l'objet state avec les valeurs de l'objet action.payload.
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    //À l'intérieur de la fonction, il définit les propriétés user et token de l'objet state à null.
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },

    //Si l'objet "user" n'existe pas dans l'état, il affiche un message d'erreur.
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },

    //Lorsque ce réducteur reçoit une action, il met à jour l'état en mappant sur le tableau
    //posts et en remplaçant le post avec le _id correspondant par le nouveau post du payload de l'action.
    setPost: (state, action) => {
      const updatePosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });

      state.posts = updatePosts;
    },
  },
});

export const { setFriends, setLogin, setLogout, setMode, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;
