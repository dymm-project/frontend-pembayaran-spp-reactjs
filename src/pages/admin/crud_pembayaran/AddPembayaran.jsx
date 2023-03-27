import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import FormAddPembayaran from '../../../components/admin/crud_pembayaran/FormAddPembayaran'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMeAdmin } from '../../../features/authSlice';

const AddPembayaran = () => {
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
        <FormAddPembayaran/>
    </Layout>
  )
}

export default AddPembayaran