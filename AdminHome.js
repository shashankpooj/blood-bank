import React from 'react'
import Layout from '../../../components/shared/Layout/Layout';
import {  useSelector } from 'react-redux';

const AdminHome = () => {
    const {user} = useSelector(state => state.auth)
  return (
    <Layout>
        <div className='container'>
            <div className='d-felx flex-column mt-4'>
                <h1>Welcome  <i className='text-success'>{user?.name}</i></h1>
                <h3>Manage Blood Bank App</h3>
                <hr />
                <p>
                    A blood bank is a center where blood gathered as a result of blood donation is stored and preserved for later use in blood transfusion.
                The term "blood bank" typically refers to a department of a hospital usually within a clinical pathology laboratory
                 where the storage of blood product occurs and where pre-transfusion and blood compatibility testing is performed.
                 However, it sometimes refers to a collection center, and some hospitals also perform collection. 
                    Blood banking includes tasks related to blood collection,processing, testing, separation, and storage.
                    The first step in the blood banking process is collection. Most blood banks, including the American Red Cross, rely on volunteer blood donors. During a typical blood donation, about 1 pint of blood is collected, along with a few small tubes for testing. 
                    onation are labeled with donor information and sent off for processing and testing.
                    Next, the donated blood is taken to the processing center. Whole blood is usually centrifuged,
                    which separates it into its many components that patients may need: red blood cells,
                    platelets and plasma. White blood cells are removed from the blood to minimize the chance of a reaction in the recipient.
                    While the donation is being processed, the blood test tubes are sent out for screening.
                    At the American Red Cross, this includes testing for diseases such as hepatitis B, hepatitis C, HIV and West Nile Virus.
                    If any of the tests are positive, the donor will be notified and the blood will not be used.
                    During the testing stage, the blood is also typed for ABO groups and Rh factor.
                    </p>
            </div>
        </div>
        
        </Layout>
  )
}

export default AdminHome;