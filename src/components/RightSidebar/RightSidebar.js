import React from "react";
import classNames from "classnames/bind";
import styles from "./RightSidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEllipsis,
	faSearch,
	faVideoCamera,
} from "@fortawesome/free-solid-svg-icons";
import Contact from "../Contact";

const cx = classNames.bind(styles);
function RightSidebar() {
	return (
		<div className={cx("wrapper")}>
			<div className={cx("rightsidebar-header")}>
				<p style={{ color: "rgb(101, 103, 107)" }}>Người liên hệ</p>
				<div className={cx("icon")}>
					<p>
						<FontAwesomeIcon icon={faVideoCamera} />
					</p>
					<p>
						<FontAwesomeIcon icon={faSearch} />
					</p>
					<p>
						<FontAwesomeIcon icon={faEllipsis} />
					</p>
				</div>
			</div>
			<Contact
				src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/298342310_1801939876642908_8669513598244250661_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=I-eT2Lgcl50AX8LFXrh&_nc_ht=scontent.fhan14-3.fna&oh=00_AfDxh-ikNr3RWAhkPV1Ihxa6zMWW3cHaQMP4hLaL_RD6jw&oe=638893BC"
				name="Duong Hoang Dang"
				status="Online"
			/>
			<Contact
				src="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.15752-9/315151088_909762370409077_611639805377630492_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=GUlF40kCH4UAX-tidR4&tn=BmkCYxo3bmS0F9kC&_nc_ht=scontent.fhan14-3.fna&oh=03_AdRtBNJuQaJ4mdDXfhnMq5cV6Vy0bmHQFsnBSllF6ljdxA&oe=63AACD87"
				name="Bui Hoang Viet Anh"
				status="Online"
			/>
			<Contact
				src="https://scontent.fhan14-3.fna.fbcdn.net/v/t1.15752-9/315324299_519586640020572_783763691270258571_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=oRsizVTmkEcAX_a0dgy&_nc_ht=scontent.fhan14-3.fna&oh=03_AdQGMjx8kDo6njHSY1RbbWlTT66HpiinAYSilF2rx-HBVw&oe=63AAD333"
				name="Trong Hung Le"
				status="Online"
			/>
			<Contact
				src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.15752-9/302574929_598087138715069_6069753499484607476_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=XypbWuTjJ8YAX8BuBPn&_nc_ht=scontent.fhan14-1.fna&oh=03_AdT5Rsz3Vt6A_XOZ70sQoQfGkJ-mHwNY88gXzZ73ebU32w&oe=63AAF650"
				name="Hung Ca Chep"
				status="Offline"
			/>
		</div>
	);
}

export default RightSidebar;
