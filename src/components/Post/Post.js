import React from "react";
import styles from "./Post.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import {
	faMessage,
	faThumbsUp,
	faShareSquare,
} from "@fortawesome/free-regular-svg-icons";
const cx = classNames.bind(styles);
function Post({ post }) {
	return (
		<div className={cx("wrapper")}>
			<div className={cx("header-post")}>
				<div className={cx("header-left")}>
					<img className={cx("img")} src={post.profilePic} alt="" />
					<div className={cx("info")}>
						<h5 className={cx("name")}>{post.name}</h5>
						<p>
							<small>{post.timeStamp}</small>
						</p>
					</div>
				</div>
				<div className={cx("header-right")}>
					<FontAwesomeIcon icon={faEllipsis} />
				</div>
			</div>
			<p className={cx("text")}>{post.post}</p>
			{/*If any image */}
			{post.image != null && (
				<div>
					<img className={cx("image-post")} src={post.image} alt="" />
				</div>
			)}
			<div className={cx("footer-post")}>
				<p className={cx("item", "like")}>
					<FontAwesomeIcon icon={faThumbsUp} />
					<span>Thích</span>
				</p>
				<p className={cx("item", "comment")}>
					<FontAwesomeIcon icon={faMessage} />
					<span>Bình luận</span>
				</p>
				<p className={cx("item", "share")}>
					<FontAwesomeIcon icon={faShareSquare} />
					<span>Chia sẻ</span>
				</p>
			</div>
		</div>
	);
}

export default Post;
