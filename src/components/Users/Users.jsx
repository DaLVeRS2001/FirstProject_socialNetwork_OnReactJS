import React from "react";
import s from './Users.module.scss'
import User from "./User/User";
import * as axios from "axios";


const Users = (props) => {
if (props.usersData.length === 0){
	axios.get('https://social-network.samuraijs.com/api/1.0/users')
		.then(response => {
			props.addUsers(response.data.items)
		})
}


	return (
		<div className={s.usersBlock}>
			Users
			<div className={s.users}>
				{props.usersData.map(u => <User userData={u} toggleFollow={props.toggleFollow}/>)}
			</div>
		</div>
	)
}


export default Users










