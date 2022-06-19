import { API_URL_PHOTOS } from "./const.js"

export const handlerlike = (likeBtn) => {
	const url = new URL(`${API_URL_PHOTOS}/${likeBtn.id}/like`)

	const toggleLike = (data) => {
		console.log(data);
		if (data.photo.liked_by_user) {
			likeBtn.classList.remove('photo__like_o')
		} else {
			likeBtn.classList.add('photo__like_o')
		}

		likeBtn.likedByUser = data.photo.liked_by_user
		likeBtn.textContent = data.photo.likes
	}

	fetch(url, {
		method: likeBtn.likedByUser ? 'DELETE' : 'POST',
		headers: {
			Authorization: `Bearer ${localStorage.getItem('Bearer')}`,
		}
	})
	.then((response) => response.json())
	.then(toggleLike)
}
