import {createSlice} from '@reduxjs/toolkit'

const initialState = [
  {
    id: 1,
    title: "Redux toolkit",
    content: "The box-shadow property enables you to cast",
  },
  {
    id: 2,
    title: "Redux slices",
    content: "A drop shadow from the frame of almost any element",
  },
  {
    id: 3,
    title: "Redux component",
    content: "If a border-radius is specified on the element with a box shadow",
  },
  {
    id: 4,
    title: "Redux toolkit",
    content: "The box-shadow property enables you to cast",
  },
  {
    id: 5,
    title: "Redux slices",
    content: "A drop shadow from the frame of almost any element",
  },
  {
    id: 6,
    title: "Redux component",
    content: "If a border-radius is specified on the element with a box shadow",
  },
];


const postsSlice =createSlice( {

  name:'posts',
  initialState,
  reducers:{
addPostForm(state, action){
  state.push(action.payload)

}

  }
})



export const selectAllposts =(state)=>state.posts
export const{addPostForm}=postsSlice.actions

export default  postsSlice.reducer
