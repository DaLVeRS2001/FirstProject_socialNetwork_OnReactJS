import React from "react";
import s from './Message.module.scss'

const Message = (props) => {
	return (
		<div className={s.message}>{props.userMessage}</div>
	)
}


export default Message










