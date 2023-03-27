import React, {useEffect} from 'react';
import Layout from './Layout/Layout'
import HomeSiswa from '../../components/siswa/Home';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMeSiswa } from '../../features/authSlice';

const Home = () => {
  const dispatch  = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state => state.auth));

  useEffect(()=>{
    dispatch(getMeSiswa())
  }, [dispatch]);

  useEffect(()=>{
    if(isError) {
      navigate("/loginsiswa")
    }
  }, [isError, navigate]);

  return (
    <Layout>
        <HomeSiswa />
    </Layout>
  )
}

export default Home