import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import FormAddKelas from "../../../components/admin/crud_kelas/FormAddKelas";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMeAdmin } from "../../../features/authSlice";

const AddKelas = () => {
  const dispatch  = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state => state.auth));

  useEffect(()=>{
    dispatch(getMeAdmin())
  }, [dispatch]);

  useEffect(()=>{
    if(isError) {
      navigate("/loginadmin")
    }
  }, [isError, navigate]);
  return (
    <Layout>
      <FormAddKelas />
    </Layout>
  );
};

export default AddKelas;
