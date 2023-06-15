import styled from "./List.module.css";


const UserList = (props)=>{

    return(
        props.data.map(data =>{
            return(
            <ul className={styled.ul}>
                <li>{data.name}</li>
                <li>{data.age}</li>
            </ul>
            )
        })
    );
}
export default UserList;