import React, {useEffect} from 'react';
import Layout from './Layout/Layout'
import DashboardAdmin from '../../components/admin/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMeAdmin } from '../../features/authSlice';

const Dashboard = () => {
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
        <DashboardAdmin />
    </Layout>
  )
}

export default Dashboard