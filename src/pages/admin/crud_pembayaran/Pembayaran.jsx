import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import ListPembayaran from '../../../components/admin/crud_pembayaran/ListPembayaran'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMeAdmin } from '../../../features/authSlice';

const Pembayaran = () => {
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
        <ListPembayaran/>
    </Layout>
  )
}

export default Pembayaran