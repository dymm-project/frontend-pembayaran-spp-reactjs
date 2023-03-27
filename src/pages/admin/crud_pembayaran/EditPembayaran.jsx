import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import FormEditPembayaran from '../../../components/admin/crud_pembayaran/FormEditPembayaran'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMeAdmin } from '../../../features/authSlice';

const EditPembayaran = () => {
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
        <FormEditPembayaran/>
    </Layout>
  )
}

export default EditPembayaran