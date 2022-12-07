import {
	faMagnifyingGlass,
	faHouse,
	faStore,
	faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = classNames.bind(styles);
function Header({ info }) {
	return (
		<div className={cx("wrapper")}>
			{/*Left */}
			<div className={cx("header-left")}>
				<svg
					viewBox="0 0 36 36"
					class="x1lliihq x1k90msu x2h7rmj x1qfuztq"
					fill="url(#jsc_s_2)"
					height="40"
					width="40"
				>
					<defs>
						<linearGradient
							x1="50%"
							x2="50%"
							y1="97.0782153%"
							y2="0%"
							id="jsc_s_2"
						>
							<stop offset="0%" stop-color="#0062E0"></stop>
							<stop offset="100%" stop-color="#19AFFF"></stop>
						</linearGradient>
					</defs>
					<path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
					<path
						class="xe3v8dz"
						d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
					></path>
				</svg>
				<div className={cx("search")}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
					<input placeholder="Search Facebook" />
				</div>
			</div>
			{/*Center */}
			<div className={cx("header-center")}>
				<div className={cx("icon")}>
					<FontAwesomeIcon icon={faHouse} />
				</div>
				<div className={cx("icon")}>
					<FontAwesomeIcon icon={faUserGroup} />
				</div>
				<div className={cx("icon")}>
					<FontAwesomeIcon icon={faStore} />
				</div>
				<div className={cx("icon")}>
					<FontAwesomeIcon icon={faUserGroup} />
				</div>
				<div className={cx("icon")}>
					<FontAwesomeIcon icon={faJava} />
				</div>
			</div>
			{/*Right */}
			<div className={cx("header-right")}>
				<div className={cx("item")}>
					<svg
						fill="currentColor"
						viewBox="0 0 44 44"
						width="2rem"
						height="2rem"
						class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 x1qx5ct2 xw4jnvo"
					>
						<circle cx="7" cy="7" r="6"></circle>
						<circle cx="22" cy="7" r="6"></circle>
						<circle cx="37" cy="7" r="6"></circle>
						<circle cx="7" cy="22" r="6"></circle>
						<circle cx="22" cy="22" r="6"></circle>
						<circle cx="37" cy="22" r="6"></circle>
						<circle cx="7" cy="37" r="6"></circle>
						<circle cx="22" cy="37" r="6"></circle>
						<circle cx="37" cy="37" r="6"></circle>
					</svg>
				</div>
				<div className={cx("item")}>
					<svg
						viewBox="0 0 28 28"
						alt=""
						class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0"
						fill="currentColor"
						height="20"
						width="20"
					>
						<path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path>
					</svg>
				</div>
				<div className={cx("item")}>
					<svg
						viewBox="0 0 28 28"
						alt=""
						class="x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0"
						fill="currentColor"
						height="20"
						width="20"
					>
						<path d="M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"></path>
					</svg>
				</div>
				<div className={cx("item")}>
					<img
						className={cx("img")}
						src={info.picture.data.url}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default Header;
