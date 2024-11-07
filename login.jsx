import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { authActions } from "../store/auth";

export default function Login() {
  const [Data, setData] = useState({ username: "", password: "" });
  const history = useNavigate();  // for navigation
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // If the user is already logged in, redirect to the home page
  if (isLoggedIn) {
    history("/");
  }

  const dispatch = useDispatch();

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  