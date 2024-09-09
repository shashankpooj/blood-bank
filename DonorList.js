// import React, { useEffect, useState } from 'react';
// import Layout from '../../../components/shared/Layout/Layout';
// import moment from 'moment';
// import API from '../../../services/API';

// const DonorList = () => {
//   const [data,setData] = useState([]);
//   //find donor records
//   const getDonors = async () => {
//       try {
//           const {data} = await API.get('/admin/donor-list');
//           //console.log(data);
//          if(data?.success){
//           setData(data?.donorData);
//          }
//       } catch (error) {
//           console.log(error);
//       }
//   };
//   useEffect(() => {
//       getDonors();
//   },[]);

//   //Delete function
//   const handleDelete = async (id) => {
//     try{
//       let answer = window.prompt('are you sure to delete this donor',"Sure")
//       if(!answer) return;
//       const {data} =await API.delete(`/admin/delete-donor/${id}`)
//       alert(data?.message)
//       window.location.reload();
//     } catch (error) {
//       console.log(error);
//     }
//   }



// return (
//   <Layout>
//      <table className="table ">
// <thead>
//   <tr>
//     <th scope="col">Name</th>
//     <th scope="col">Email</th>
//     <th scope="col">Phone</th>
//     <th scope="col">Date</th>
//     <th scope="col">Action</th>
    
//   </tr>
// </thead>
// <tbody>
//   {data?.map((record) => (
//     <tr key={record._id}>
    
//     <td>{record.name || record.organisationName + " {ORG}"}</td>
//     <td>{record.email}</td>
//     <td>{record.phone}</td>
//     <td>{moment(record.createdAt).format('DD/MM/YYYY hh:mm A')}</td>
//     <td>
//       <button className='btn btn-danger' onClick={() => handleDelete(record._id)}>Delete</button>
//     </td>
    
//   </tr>
//   ))}
  
 
// </tbody>
// </table>

//       </Layout>
// )
// }

// export default DonorList

import React, { useEffect, useState } from 'react';
import Layout from '../../../components/shared/Layout/Layout';
import moment from 'moment';
import API from '../../../services/API';

const DonorList = () => {
  const [data, setData] = useState([]);

  const getDonors = async () => {
    try {
      const { data } = await API.get('/admin/donor-list');
      if (data?.success) {
        setData(data?.donorData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonors();
  }, []);

  const handleDelete = async (id) => {
    try {
      let answer = window.prompt('Are you sure you want to delete this donor?', 'Sure');
      if (!answer) return;
      const { data } = await API.delete(`/admin/delete-donor/${id}`);
      alert(data?.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      // You can implement your update logic here, for example:
      const updatedName = window.prompt('Enter updated name:', '');
      if (updatedName === null) return;
      const updatedEmail = window.prompt('Enter updated email:', '');
      if (updatedEmail === null) return;
      const updatedPhone = window.prompt('Enter updated phone number:', '');
      if (updatedPhone === null) return;
      // if (updatedName = "")
      //   {
      //     updatedName=
      //   }
      if (!updatedName.trim() || !updatedEmail.trim() || !updatedPhone.trim()) {
        alert('Please fill in all fields.');
        return;
      }

      const { data } = await API.put(`/admin/update-donor/${id}`, {
        name: updatedName,
        email: updatedEmail,
        phone: updatedPhone
      });

      alert(data?.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((record) => (
            <tr key={record._id}>
              <td>{record.name || record.organisationName + " {ORG}"}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{moment(record.createdAt).format('DD/MM/YYYY hh:mm A')}</td>
              <td>
                <button className='btn btn-danger' onClick={() => handleDelete(record._id)}>Delete</button>
                <span style={{ marginRight: '10px' }}></span>
                 <button className='btn btn-primary ml-2' onClick={() => handleUpdate(record._id)}>Update</button> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default DonorList;
