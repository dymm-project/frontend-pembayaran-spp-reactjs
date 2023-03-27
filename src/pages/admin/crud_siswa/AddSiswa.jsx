import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import FormAddSiswa from '../../../components/admin/crud_siswa/FormAddSiswa'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMeAdmin } from '../../../features/authSlice';

const AddSiswa = () => {
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
        <FormAddSiswa/>
    </Layout>
  )
}

export default AddSiswa