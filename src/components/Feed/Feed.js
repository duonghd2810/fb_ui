import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Feed.module.scss";
import classNames from "classnames/bind";
import CreatePost from "../CreatePost";
import { selectPost, addAllPost } from "../../features/postSlice";
import Post from "../Post";
const cx = classNames.bind(styles);
function Feed({ info }) {
	const FACEBOOK_CLONE_ENDPOINT = "http://localhost:8080/api/v1/posts";
	const dispatch = useDispatch();
	const posts = useSelector(selectPost);
	useEffect(() => {
		const fetchData = () => {
			const response = axios
				.get(FACEBOOK_CLONE_ENDPOINT)
				.then((res) => {
					dispatch(addAllPost(res.data));
				})
				.catch((err) => {
					console.log(err);
				});
		};
		fetchData();
	}, []);
	return (
		<div className={cx("wrapper")}>
			<CreatePost info={info} />
			{posts.map((post) => (
				<Post key={post.id} post={post} />
			))}
		</div>
	);
}

export default Feed;
