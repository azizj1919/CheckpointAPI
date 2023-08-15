
const UserCard=({el})=>{
    
return (
    <tr>
          <td>{el.id}</td>
          <td>{el.name}</td>
          <td>{el.username}</td>
    </tr>
  );

}


export default UserCard