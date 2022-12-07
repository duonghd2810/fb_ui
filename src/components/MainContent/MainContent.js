import React from "react";
import styles from "./MainContent.module.scss";
import classNames from "classnames/bind";
import Sidebar from "../Sidebar";
import Feed from "../Feed";
import RightSidebar from "../RightSidebar";
const cx = classNames.bind(styles);
function MainContent({ info }) {
	return (
		<div className={cx("wrapper")}>
			{/*Left */}
			<Sidebar info={info} />
			{/*Center */}
			<Feed info={info} />
			{/*Right*/}
			<RightSidebar />
		</div>
	);
}

export default MainContent;
