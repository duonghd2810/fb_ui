import React from "react";
import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
const cx = classNames.bind(styles);
function Contact({ name, src, status }) {
	return (
		<div className={cx("wrapper")}>
			<img className={cx("img")} src={src} alt="" />
			<p className={cx("name")}>{name}</p>
			{status === "Online" && (
				<div className={cx("active", "online")}></div>
			)}
			{status === "Offline" && (
				<div className={cx("active", "offline")}></div>
			)}
		</div>
	);
}

export default Contact;
