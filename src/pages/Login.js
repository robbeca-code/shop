import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import style from './Login.module.css';
import { setId, setPass, setMbti, setLogin } from '../store';
import Sidebar from './Sidebar';

function Login() {
  const dispatch = useDispatch();

  return(
    <article className={cn(style.container)}>
      <aside>
        <Sidebar />
      </aside>
      <h1 className={cn(style.headerTitle)}>
        로그인
      </h1>
      <form>
        <div className={cn(style.inputContainer)}>
          <input type="text" className={cn(style.inputStyle)} placeholder="아이디를 입력해주세요" onChange={(e) => dispatch(setId(e.target.value))} />

          <input type="text" className={cn(style.inputStyle)} placeholder="비밀번호를 입력해주세요" onChange={(e) => dispatch(setPass(e.target.value))} />

          <input type="text" className={cn(style.inputStyle)} placeholder="MBTI를 입력해주세요" onChange={(e) => dispatch(setMbti(e.target.value))} />
        </div>

        <Link to="/" className={cn(style.submitBtn)} onClick={() => {
          dispatch(setLogin())
        }}>
          로그인
        </Link>
      </form>
      
    </article>
  );
}

export default Login;