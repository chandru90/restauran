const ItemList = (props) => {
    return (
    <ul>
        {props.users.map ((user)=> (
          <li key={user.id}>
            {user.idno}
            {user.dish}
       
          </li>
        ))}
      </ul> );
  };
  
  export default ItemList;