import { useState, useRef, useEffect } from "react";
import axios from "axios";
import styles from "./CreatePost.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFaceLaugh,
	faImage,
	faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addPost } from "../../features/postSlice";
const cx = classNames.bind(styles);
function CreatePost({ info }) {
	const FACEBOOK_CLONE_ENDPOINT = "http://localhost:8080/api/v1/posts";
	const [post, setPost] = useState("");
	const [imageToPost, setImageToPost] = useState();
	const inputRef = useRef();
	const hiddenFileInput = useRef();
	const dispatch = useDispatch();
	const handleClick = () => {
		hiddenFileInput.current.click();
	};
	const addImageToPost = (e) => {
		const file = e.target.files[0];
		file.preview = URL.createObjectURL(file);
		setImageToPost(file);
	};
	useEffect(() => {
		return () => {
			imageToPost && URL.revokeObjectURL(imageToPost.preview);
		};
	}, [imageToPost]);
	const removeImage = () => {
		setImageToPost(null);
	};
	const submitForm = (e) => {
		e.preventDefault();
		if (!inputRef.current.value) return;
		const formData = {
			post: inputRef.current.value,
			file: imageToPost.preview,
			name: info.name,
			email: info.email,
			profilePic: info.picture.data.url,
		};
		axios
			.post(FACEBOOK_CLONE_ENDPOINT, formData, {
				headers: { Accept: "application/json" },
			})
			.then((response) => {
				dispatch(addPost(response.data));
				removeImage();
			})
			.catch((error) => {
				console.log(error);
			});
		inputRef.current.value = "";
	};
	return (
		<div className={cx("wrapper")}>
			<div className={cx("post")}>
				<img className={cx("img")} src={info.picture.data.url} alt="" />
				<form className={cx("form")} encType="form/data">
					<input
						ref={inputRef}
						className={cx("input-form")}
						value={post}
						onChange={(e) => setPost(e.target.value)}
						placeholder="Bạn đang nghĩ gì?"
					/>
					<button hidden onClick={submitForm}></button>
				</form>
			</div>
			{imageToPost && (
				<div onClick={removeImage}>
					<img
						className={cx("image-post")}
						src={imageToPost.preview}
						alt=""
					/>
				</div>
			)}
			<div className={cx("footer-post")}>
				<p className={cx("item")}>
					<FontAwesomeIcon
						icon={faVideo}
						style={{
							color: "#e41e3f",
							marginRight: "4px",
							fontSize: "2rem",
						}}
					/>
					<span>Phát trực tiếp</span>
				</p>
				<p className={cx("item")} onClick={handleClick}>
					<FontAwesomeIcon
						icon={faImage}
						style={{
							color: "#00A400",
							marginRight: "4px",
							fontSize: "2rem",
						}}
					/>
					<span>Ảnh / Video</span>
					<input
						type="file"
						onChange={addImageToPost}
						ref={hiddenFileInput}
						hidden
						accept="image/*"
					/>
				</p>
				<p className={cx("item")}>
					<FontAwesomeIcon
						icon={faFaceLaugh}
						style={{
							color: "#F5C33B",
							marginRight: "4px",
							fontSize: "2rem",
						}}
					/>
					<span>Feeling / Activity</span>
				</p>
			</div>
		</div>
	);
}

export default CreatePost;
