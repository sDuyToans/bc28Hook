import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//Cấu hình BrowserRouter
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseStateDemo from "./pages/HooksDemo/UseStateDemo/UseStateDemo";
import UseEffectDemo from "./pages/HooksDemo/UseEffectDemo/UseEffectDemo";
import UseCallbackDemo from "./pages/HooksDemo/UseCallBackDemo/UseCallbackDemo";
import UseMemoDemo from "./pages/HooksDemo/UseMemoDemo/UseMemoDemo";
import UseRefDemo from "./pages/HooksDemo/UseRefDemo/UseRefDemo";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import DemoNumber from "./pages/HooksDemo/UseRedux/DemoNumber/DemoNumber";
import { DemoFacebookApp } from "./pages/HooksDemo/UseRedux/DemoFacebookApp/DemoFacebookApp";
import ReactForm from "./pages/HooksRoutes/ReactForm/ReactForm";
import Profile from "./pages/HooksRoutes/ReactForm/Profile";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Search from "./pages/Search/Search";
import DemoUseRoute from "./pages/DemoUseRoute/DemoUseRoute";
import DemoAnimation from "./pages/DemoAnimation/DemoAnimation";
import Login from "./pages/Login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home/>}/>
          <Route path="detail">
            <Route path=":id" element={<Detail/>}/>
          </Route>
          <Route path="usestate" element={<UseStateDemo />} />
          <Route path="useeffect" element={<UseEffectDemo />} />
          <Route path="usecallback" element={<UseCallbackDemo />} />
          <Route path="usememo" element={<UseMemoDemo />} />
          <Route path="useref" element={<UseRefDemo />} />
          <Route path="reduxnumber" element={<DemoNumber/>}/>
          <Route path="reduxfacebookapp" element={<DemoFacebookApp/>}/>
          <Route path="reactform" element={<ReactForm/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="search" element={<Search/>}/>
          <Route path="animation" element={<DemoAnimation/>}/>
          <Route path="customhook" element={<DemoUseRoute/>}/>
          <Route path="login" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
