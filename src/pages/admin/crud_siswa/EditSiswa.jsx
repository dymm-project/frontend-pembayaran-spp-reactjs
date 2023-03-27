import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import FormEditSiswa from '../../../components/admin/crud_siswa/FormEditSiswa'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMeAdmin } from '../../../features/authSlice';

const EditSiswa = () => {
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
        <FormEditSiswa/>
    </Layout>
  )
}

export default EditSiswa