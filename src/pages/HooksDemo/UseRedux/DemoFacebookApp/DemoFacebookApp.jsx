import React from 'react'
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addComment } from '../../../../redux/reducers/facebookReducer';

export const DemoFacebookApp = () => {
    const arrComment = useSelector(state => state.facebook.arrComment);
    const userComment = useRef({name: '', content: ''});
    const dispatch = useDispatch();
    const renderComment = () => {
        return arrComment.map((comment, index) => {
            return (
                <div className="d-flex" key={index}>
                    <div className="avatar" style={{width: 50}}>
                        <img src={`https://i.pravatar.cc?u=${comment.name}`} alt="avatar" className='w-100' style={{display: 'block'}}/>
                    </div>
                    <div className="content mx-2">
                        <h5 className='text-danger'>{comment.name}</h5>
                        <p>{comment.content}</p>
                    </div>
                </div>
            )
        })
    }
    const handleChange = (event) => {
        const { id, value } = event.target;
        userComment.current[id] = value;
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        //gửi dữ liệu lên redux
        const newComment = {...userComment.current}
        const action = addComment(newComment);
        /*
            action = {
                type: 'facebookReducer/addComment',
                payload: {name: 'Toan', content: '123'}
            }
        */
       dispatch(action);
    }
  return (
    <form className="container" onSubmit={handleSubmit}>
        <h3>Demo facebook app</h3>
        <div className="card">
            <div className="card-header">
                {renderComment()}
            </div>
            <div className="card-body">
                <div className="form-group">
                    <p>name</p>
                    <input type="text" className='form-control' id='name' onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <p>content</p>
                    <input type="text" className='form-control' id='content' onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <button className="btn btn-success" type='submit'>Send</button>
                </div>
            </div>
        </div>
    </form>
  )
}
