import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import FormAddAdmin from '../../../components/admin/crud_admin/FormAddAdmin'
import { getMeAdmin } from '../../../features/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddAdmin = () => {
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
        <FormAddAdmin />
    </Layout>
  )
}

export default AddAdmin