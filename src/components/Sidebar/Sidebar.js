import React from "react";
// import { useMediaQuery } from "react-responsive";
import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import SidebarItem from "../SidebarItem";
import {
	faClock,
	faFlag,
	faPeopleGroup,
	faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Sidebar({ info }) {
	// const isDesktop = useMediaQuery({ query: "min-width:320px" });
	return (
		<div className={cx("wrapper")}>
			<div className={cx("info")}>
				<img className={cx("img")} src={info.picture.data.url} alt="" />
				<p className={cx("name")}>{info.name}</p>
			</div>
			<SidebarItem icon={faUserGroup} text="Bạn bè" />
			<SidebarItem icon={faClock} text="Kỉ niệm" />
			<SidebarItem icon={faPeopleGroup} text="Nhóm" />
			<SidebarItem icon={faFlag} text="Trang" />
		</div>
	);
}

export default Sidebar;
