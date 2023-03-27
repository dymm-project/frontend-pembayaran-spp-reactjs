import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import ListKelas from '../../../components/admin/crud_kelas/ListKelas'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMeAdmin } from '../../../features/authSlice';

const Kelas = () => {
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
        <ListKelas/>
    </Layout>
  )
}

export default Kelas