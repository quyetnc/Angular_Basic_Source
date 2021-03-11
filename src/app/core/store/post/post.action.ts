// const GetListPost = {
//   type: 'Get list post',
// };

import { Action, createAction, props } from '@ngrx/store';

export const GetPosts = '@Get/Getall';
export const GetPost = '@Get/Get';
export const CreatePost = '@Post/Create';
export const UpdatePost = '@Port/Update';

export const getPosts = createAction(GetPosts);
export const getPost = createAction(GetPost, props<{ id: number }>());
export const createPost = createAction(CreatePost, props<any>());
export const updatePost = createAction(UpdatePost, props<any>()); 


// export class UpdatePostAction implements Action {
//   readonly type = UpdatePost;
//   constructor(public payload: number) {}    //Fake page load
// }
// export const updatePost = createAction(
//   UpdatePost,
//   props<{ payload: number }>()
// );
