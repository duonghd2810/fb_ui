import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SidebarItem.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function SidebarItem({ icon, text }) {
	return (
		<div className={cx("wrapper")}>
			<p className={cx("item_sidebar")}>
				<FontAwesomeIcon icon={icon} />
			</p>
			<p className={cx("text")}>
				<b>{text}</b>
			</p>
		</div>
	);
}

export default SidebarItem;
