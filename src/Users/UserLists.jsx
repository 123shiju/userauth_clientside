import React, { useEffect, useState } from "react";
import { getUsers } from "../Services/Api";
import { deleteUser } from "../Services/Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserLists = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data);
      } catch (error) {
        toast.error("Error fetching users");
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await deleteUser(id);
      toast.success("User deleted successfully");
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      toast.error("Error deleting user");
    }
  };

  const handleUpdate = (id) => {
    navigate(`/updateUser/${id}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="text-center">Name</th>
            <th className="text-center">Email</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="text-center">{user.name}</td>
              <td className="text-center">{user.email}</td>
              <td className="text-center">
                <button
                  onClick={() => handleUpdate(user.id)}
                  className="btn btn-warning btn-sm me-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserLists;
