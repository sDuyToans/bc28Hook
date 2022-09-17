import React, { useEffect, useState } from "react";
import { useCookie } from "react-use";
import useCookieCustom from "../../hooks/useCookie";
import useRoute from "../../hooks/useRoute";

export default function DemoUseRoute() {
  const {
    navigate,
    params,
    searchParams: [search, setSearch],
  } = useRoute();
  console.log({ navigate, params, searchParams: [search, setSearch] });
  const [setCookie, getCookie] = useCookieCustom('my-cookie', '');
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    console.log(username, password);
    setCookie(username, 30);
  }
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-group">
        <p>Nhập vào username</p>
        <input id="username" className="form-control" />
      </div>
      <div className="form-group">
        <p>Nhập vào password</p>
        <input id="password" className="form-control" type={'password'} />
      </div>
      <div className="form-group">
        <button className="btn btn-success" type="submit">Login</button>
      </div>
    </form>
  );
}
