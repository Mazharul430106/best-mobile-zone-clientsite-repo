import React from 'react';
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/users')
            .then(res => res.json())
          
    })

    const handleDeleteUser =(id)=>{
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'delete'
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.deletedCount > 0){
                toast.success('user delete successfully')
                refetch();
            }
        })
        .catch(error=> {
            console.log(error)
        })
    }


    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users?.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <td>{user?.role}</td>
                            <td><button onClick={()=>handleDeleteUser(user._id)}  className='btn btn-primary text-white' disabled={user?.role === 'admin'}>delete</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;